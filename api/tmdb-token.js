module.exports = async function handler(req, res) {
    res.status(200).json({
        token: process.env.TMDB_TOKEN || null
    });
};