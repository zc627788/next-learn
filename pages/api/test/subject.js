function handle(req, res) {
    const { context } = req;
    console.log(context)
    res.status(200).json({ message: "api/test/subject" });
  }
  export default handle;
  