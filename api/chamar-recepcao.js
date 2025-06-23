require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  try {
    await client.messages.create({
      body: 'recepção',
      from: '+18174820607',
      to: '+5554992917132',
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar SMS', details: error.message });
  }
}; 