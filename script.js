document.addEventListener('DOMContentLoaded', () => {
    console.log("=== Скрипт успешно загружен и видит DOM ===");

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

    // 3. ОТЛАДОЧНАЯ ЛОГИКА ЧАТА
    const chatBtn = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');

    console.log("Поиск элементов чата:");
    console.log("Кнопка чата:", chatBtn);
    console.log("Окно чата:", chatWindow);
    console.log("Крестик:", closeChat);

    if (chatBtn && chatWindow && closeChat) {
        // Управляем видимостью жестко через инлайн-стили
        chatWindow.style.display = 'none';

        chatBtn.addEventListener('click', () => {
            console.log("Кликнули по кнопке чата! Текущий display:", chatWindow.style.display);
            if (chatWindow.style.display === 'none') {
                chatWindow.style.display = 'flex';
                console.log("Переключили display на flex (окно должно открыться)");
            } else {
                chatWindow.style.display = 'none';
                console.log("Переключили display на none (окно должно закрыться)");
            }
        });

        closeChat.addEventListener('click', (event) => {
            console.log("Кликнули по крестику закрытия!");
            event.stopPropagation();
            chatWindow.style.display = 'none';
        });
    } else {
        console.error("КРИТИЧЕСКАЯ ОШИБКА: JS не смог найти один из элементов чата на странице!");
    }
});
