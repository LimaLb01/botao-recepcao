document.getElementById('chamarBtn').addEventListener('click', async () => {
    const btn = document.getElementById('chamarBtn');
    btn.disabled = true;
    btn.textContent = 'Chamando...';
    try {
        const res = await fetch('/api/chamar-recepcao', { method: 'POST' });
        if (res.ok) {
            btn.textContent = 'Recepção chamada!';
            setTimeout(() => {
                btn.textContent = 'A recepção está vindo';
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = 'Chamar Recepção';
                }, 2000);
            }, 1500);
        } else {
            btn.textContent = 'Erro ao chamar!';
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = 'Chamar Recepção';
            }, 3000);
        }
    } catch (e) {
        btn.textContent = 'Erro de conexão!';
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Chamar Recepção';
        }, 3000);
    }
}); 