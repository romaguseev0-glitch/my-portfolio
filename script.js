document.addEventListener('DOMContentLoaded', () => {
    // 1. ПЛАВНАЯ ПРОКРУТКА
    const heroBtn = document.querySelector('.btn[href="#projects"]');
    const projectsSection = document.getElementById('projects');

    if (heroBtn && projectsSection) {
        heroBtn.addEventListener('click', (event) => {
            event.preventDefault();
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // 2. ЛОГИКА КАЛЬКУЛЯТОРА
    const calcForm = document.getElementById('calc-form');
    const totalPriceElement = document.getElementById('total-price');

    if (calcForm && totalPriceElement) {
        calcForm.addEventListener('change', () => {
            let total = 0;
            const checkedBoxes = calcForm.querySelectorAll('input[type="checkbox"]:checked');

            checkedBoxes.forEach(checkbox => {
                total += parseInt(checkbox.value, 10);
            });

            totalPriceElement.textContent = total.toLocaleString('ru-RU');
        });
    }

  // 3. ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ ОКНА ЧАТА (БЕЗОТКАЗНАЯ)
    const chatBtn = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');

    if (chatBtn && chatWindow && closeChat) {
        // Сразу принудительно задаем начальное состояние из JS
        chatWindow.style.display = 'none';

        chatBtn.addEventListener('click', (e) => {
            if (chatWindow.style.display === 'none') {
                chatWindow.style.display = 'flex';
            } else {
                chatWindow.style.display = 'none';
            }
        });

        closeChat.addEventListener('click', (event) => {
            event.stopPropagation(); // Стопаем всплытие, чтобы не триггерить кнопку под окном
            chatWindow.style.display = 'none';
        });
    }
});
