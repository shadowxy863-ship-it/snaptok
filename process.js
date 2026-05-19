export default async function handler(req, res) {
  const { url } = req.body || {};

  if (!url) {
    return res.status(400).json({ message: "No URL provided" });
  }

  if (!url.includes("tiktok.com")) {
    return res.json({ message: "Invalid TikTok link" });
  }

  return res.json({
    message: "Backend working ✔️"
  });
}
