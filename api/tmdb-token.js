export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/authentication/token/new',
            {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.VITE_ACCESS_TOKEN}`
                }
            }
        );

        const data = await response.json();

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