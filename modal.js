async function showModal() {
    // Создаем элемент для затемнения
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Полупрозрачный черный фон
    overlay.style.zIndex = '999';

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#121214';
    modal.style.color = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    modal.style.zIndex = '1000';
    modal.style.borderRadius = '24px';
    modal.style.maxWidth = '300px';
    modal.style.width = '80%';
    modal.style.textAlign = 'left';

    // Добавляем шрифт
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    modal.style.fontFamily = '"Roboto", sans-serif';

    const h1_modal = document.createElement('h1');
    h1_modal.textContent = h1_message;
    const p_modal = document.createElement('p');
    p_modal.textContent = p_message;
    p_modal.style.fontSize = '15px';
    p_modal.style.color = '#7D7D85';
    h1_modal.style.fontSize = '18px';
    h1_modal.style.fontWeight = '600';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#222224';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '20px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.lineHeight = '1';
    closeButton.style.padding = '0';
    closeButton.onclick = () => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
        tonConnectUI.disconnect();
        setTimeout(() => {
            location.reload();
        }, 300);
    };

    modal.appendChild(h1_modal);
    modal.appendChild(p_modal);
    modal.appendChild(closeButton);

    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}