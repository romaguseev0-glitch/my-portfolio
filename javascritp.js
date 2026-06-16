document.addEventListener('DOMContentLoaded', () => {
    // Находим нашу кнопку "Смотреть работы"
    const heroBtn = document.querySelector('.btn[href="#projects"]');
    
    // Находим секцию проектов, к которой надо прокрутить
    const projectsSection = document.getElementById('projects');

    if (heroBtn && projectsSection) {
        heroBtn.addEventListener('click', (event) => {
            // Отменяем стандартное мгновенное переключение по ссылке
            event.preventDefault();
            
            // Плавно скроллим к секции
            projectsSection.scrollIntoView({
                behavior: 'smooth', // Плавный тип анимации
                block: 'start'      // Выравниваем секцию по верхнему краю экрана
            });
        });
    }
});