// Lightweight health check function to verify serverless routing
module.exports = (req, res) => {
  res.status(200).json({ ok: true, message: 'API function reachable' });
};
