module.exports = function(res, err, data) {
  if (err) return res.status(500).json("Error!");
  res.json(data);
}
