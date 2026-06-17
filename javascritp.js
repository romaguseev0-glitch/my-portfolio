document.addEventListener('DOMContentLoaded', () => {
    // 1. ПЛАВНАЯ ПРОКРУТКА (Твой код)
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
        // Слушаем изменения на форме (клик по чекбоксам)
        calcForm.addEventListener('change', () => {
            let total = 0;

            // Находим все выбранные чекбоксы внутри формы
            const checkedBoxes = calcForm.querySelectorAll('input[type="checkbox"]:checked');

            // Складываем их значения (переводя строки в числа через parseInt)
            checkedBoxes.forEach(checkbox => {
                total += parseInt(checkbox.value, 10);
            });

            // Выводим итоговую сумму на страницу
            totalPriceElement.textContent = total.toLocaleString('ru-RU');
        });
    }
});
