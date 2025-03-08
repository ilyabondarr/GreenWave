window.addEventListener("DOMContentLoaded", function () {
    // Функция для печати текста
function typeText(element) {
    const textBlock = element;
    const text = textBlock.textContent;
    textBlock.textContent = ''; // Очищаем текст для эффекта печати

    let index = 0;
    let isTyping = false; // Флаг для отслеживания состояния печати

    // Функция для печати по символу
    function print() {
        if (index < text.length) {
            textBlock.textContent += text[index];
            index++;
            setTimeout(print, 100); // Настройте скорость печати (100 мс)
        }
    }

    const onScroll = () => {
        const rect = textBlock.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            textBlock.style.display = 'block'; // Показываем текст блок
            if (!isTyping) { // Если печать еще не началась
                isTyping = true; // Устанавливаем флаг
                print(); // Запускаем печать текста
            }
            window.removeEventListener('scroll', onScroll); // Удаляем обработчик после завершения
        }
    };

    window.addEventListener('scroll', onScroll);
}

// Получаем элементы текста
const textBlocks = document.querySelectorAll('.dinamic-text');

// Вызываем функцию для каждого блока
textBlocks.forEach(block => typeText(block));

})

