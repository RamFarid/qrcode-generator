import qr from 'qrcode'

export default async function handler(req, res) {
  const { text } = req.query
  if (!text)
    return res.status(400).json({
      status: 400,
      message: 'Text param is required.',
      success: false,
    })
  try {
    const qrCode = await qr.toDataURL(text)
    res.status(200).json({ data: qrCode, success: true, status: 200 })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'External server error',
      success: false,
    })
  }
}
