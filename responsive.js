// Обработка адаптивного меню
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Доступность
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);
        });
    }
    
    // Обработка ориентации устройства
    window.addEventListener('orientationchange', function() {
        // Пересчитываем высоту для мобильных устройств
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    // Инициализация высоты для мобильных устройств
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Обработка адаптивных таблиц
    const tables = document.querySelectorAll('table.responsive');
    tables.forEach(table => {
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-responsive';
        table.parentNode.insertBefore(tableWrapper, table);
        tableWrapper.appendChild(table);
    });
}); 