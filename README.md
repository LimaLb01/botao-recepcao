# Botão Recepção Conexo

## Descrição
Site interativo para chamar a recepção via SMS usando Twilio, inspirado na identidade visual da Conexo.

## Como usar

1. **Frontend:**
   - Acesse `frontend/index.html` para visualizar o site localmente.

2. **Deploy no Vercel:**
   - Suba a pasta `frontend` como frontend estático.
   - A API (`api/chamar-recepcao.js`) deve estar na raiz do projeto para funcionar como serverless function no Vercel.

3. **Configuração Twilio:**
   - Os dados de autenticação já estão no código, mas recomenda-se usar variáveis de ambiente no Vercel para segurança.

## Estrutura
```
frontend/
  index.html
  style.css
  script.js
api/
  chamar-recepcao.js
```

## Observações
- O botão envia um SMS para +5554992917132 com a mensagem "recepção".
- O visual é escuro, com animações neon inspiradas na logo. 