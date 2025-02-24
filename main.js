// Улучшение UX при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Удаляем скелетную анимацию после загрузки контента
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach(skeleton => {
        skeleton.classList.remove('skeleton');
    });
    
    // Плавное появление контента
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
    
    // Ленивая загрузка изображений
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback для старых браузеров
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}); 