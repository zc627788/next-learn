function handle(req, res) {
    res.status(200).json({ message: `id:${JSON.stringify(req.query)}` });
  }
  export default handle;
  