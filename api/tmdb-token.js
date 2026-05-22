module.exports = async function handler(req, res) {
    res.status(200).json({
        exists: !!process.env.TMDB_TOKEN
    });
};