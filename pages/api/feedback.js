function handle(req, res) {
  const { context } = req;
  console.log(context)
  res.status(200).json({ message: "this works" });
}
export default handle;
