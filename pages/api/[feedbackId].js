//动态后端api路由

function handler(req, res) {
  const {feedbackId} = req.query
  res.status(200).json({ message: `feedbackId:${feedbackId}` });
}
export default handler;
