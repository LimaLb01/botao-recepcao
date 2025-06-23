require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use('/', express.static(path.join(__dirname, 'frontend')));

// Configuração do Twilio usando variáveis de ambiente
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Endpoint da API para enviar SMS
app.post('/api/chamar-recepcao', async (req, res) => {
  try {
    // Envia a primeira mensagem
    await client.messages.create({
      body: 'Recepção',
      from: '+18174820607',
      to: '+5554992917132',
    });
    // Envia a segunda mensagem personalizada
    await client.messages.create({
      body: 'Aguarde, estamos a caminho!',
      from: '+18174820607',
      to: '+5554992917132',
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar SMS', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 