// Оптимизация изображений
function optimizeImages() {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // Добавляем атрибут loading="lazy" для ленивой загрузки
        img.setAttribute('loading', 'lazy');
        
        // Добавляем srcset для адаптивных изображений
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
        }
        
        // Добавляем размеры для предотвращения CLS
        if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
            img.style.aspectRatio = 'auto';
        }
    });
}

// Оптимизация шрифтов
function optimizeFonts() {
    // Добавляем font-display: swap для улучшения FCP
    const fontFaceStyle = document.createElement('style');
    fontFaceStyle.textContent = `
        @font-face {
            font-family: 'CustomFont';
            src: url('/fonts/custom-font.woff2') format('woff2');
            font-display: swap;
        }
    `;
    document.head.appendChild(fontFaceStyle);
}

// Инициализация оптимизаций
document.addEventListener('DOMContentLoaded', function() {
    optimizeImages();
    optimizeFonts();
}); 