// Компонент, срабатывающий после успешной OAuth авторизации,
import {useEffect} from "react"

// его цель - отправить код обратно в главное окно приложения и закрыть popup
export const OAuthCallback = () => {

    const exchangeToken = async (request_token: string) => {

        try {
            console.log("request_token =", request_token);
            const res = await fetch(
                `https://api.themoviedb.org/3/authentication/session/convert/4`,

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        accept: "application/json",
                        Authorization: `Bearer ${import.meta.env.TMDB_TOKEN}`,
                    },
                    body: JSON.stringify({request_token}),
                }
            );

            const data = await res.json();

            if (data.success) {
                localStorage.setItem("session_id", data.session_id);
                window.location.href = "/";
            } else {
                console.error("Session creation failed", data);
            }
        } catch (err) {
            console.error("Callback error:", err);
        }
    };


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const request_token = params.get("request_token");
        const approved = params.get("approved");

        if (request_token && approved === "true") {

            exchangeToken(request_token);
        }
    }, []);

    return <p>Logging you in...</p>
}


// export default function Callback() {
//
//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//
//         const request_token = params.get("request_token");
//         const approved = params.get("approved");
//
//         if (!request_token || approved !== "true") {
//             console.error("Login cancelled or invalid callback");
//             return;
//         }
//
//         exchangeToken(request_token);
//     }, []);
//
//     const exchangeToken = async (request_token: string) => {
//         try {
//             const res = await fetch(
//                 "https://api.themoviedb.org/3/authentication/session/new",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         accept: "application/json",
//                         Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
//                     },
//                     body: JSON.stringify({ request_token }),
//                 }
//             );
//
//             const data = await res.json();
//
//             console.log("SESSION RESULT:", data);
//
//             if (data.success) {
//                 localStorage.setItem("session_id", data.session_id);
//
//                 // редирект в приложение
//                 window.location.href = "/";
//             } else {
//                 console.error("Session creation failed", data);
//             }
//         } catch (err) {
//             console.error("Callback error:", err);
//         }
//     };
//
//     return <div>Logging in...</div>;
// }