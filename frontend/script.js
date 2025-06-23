document.getElementById('chamarBtn').addEventListener('click', async () => {
    const btn = document.getElementById('chamarBtn');
    btn.disabled = true;
    btn.textContent = 'Chamando...';
    try {
        const res = await fetch('/api/chamar-recepcao', { method: 'POST' });
        if (res.ok) {
            btn.textContent = 'Recepção chamada!';
        } else {
            btn.textContent = 'Erro ao chamar!';
        }
    } catch (e) {
        btn.textContent = 'Erro de conexão!';
    }
    setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Chamar Recepção';
    }, 3000);
}); 