const sgMail = require('@sendgrid/mail');

// Minimal Vercel-style serverless handler (CommonJS)
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, from, subject, message } = req.body || {};

  if (!from || !subject || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  if (!process.env.SENDGRID_API_KEY || !process.env.TO_EMAIL) {
    console.error('Missing SENDGRID_API_KEY or TO_EMAIL in environment');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL || process.env.TO_EMAIL,
      subject: subject,
      text: `Nombre: ${name || 'No especificado'}\n\nDe: ${from}\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name || 'No especificado'}</p><p><strong>De:</strong> ${from}</p><p><strong>Mensaje:</strong></p><p>${(message || '').replace(/\n/g, '<br/>')}</p>`,
    };

    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SendGrid error', err?.response?.body || err.message || err);
    return res.status(500).json({ error: 'send-failed' });
  }
};
