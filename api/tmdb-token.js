module.exports = async function handler(req, res) {
    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/authentication/token/new',
            {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            }
        );

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};