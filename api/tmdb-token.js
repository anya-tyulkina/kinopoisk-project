export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.TMDB_API_KEY}`
        );
            // {
            //     headers: {
            //         accept: 'application/json',
            //         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjhmY2Y3OWEwNDBmN2QwNzIwYjcyZGUzMzA4NTllZiIsIm5iZiI6MTc3OTQzNjExOC4xMjk5OTk5LCJzdWIiOiI2YTEwMGE1NmJjMWU2ZjEyYWRhMzA4NzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9XrXyZSW39hEPrcpC_XMZMhvOkWV-y0m3oN0gxUoSxg`
            //     }
            // }
        // );

        const data = await response.json();

        // 💥 ВАЖНО: проверяем TMDB ответ
        if (!response.ok) {
            return res.status(response.status).json({
                error: data,
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            error: String(error),
        });
    }
}