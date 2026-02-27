document.addEventListener('DOMContentLoaded', function() {
    
    // ===== БУРГЕР-МЕНЮ =====
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burger) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Закрытие меню при клике на ссылку
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== ФОРМА ПОДПИСКИ =====
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('emailInput');
    const messageEl = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim();

            // Валидация email
            if (!email) {
                showMessage('Пожалуйста, введите email', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Введите корректный email адрес', 'error');
                return;
            }

            // Показываем сообщение об отправке
            showMessage('Отправка...', 'info');
            
            // Здесь можно добавить отправку на сервер
            // Но для GitHub Pages просто покажем успех
            setTimeout(() => {
                showMessage('Спасибо за подписку! (Демо-режим)', 'success');
                emailInput.value = '';
            }, 1000);
        });
    }

    // Функция валидации email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Функция показа сообщений
    function showMessage(text, type) {
        if (messageEl) {
            messageEl.textContent = text;
            messageEl.style.color = type === 'success' ? '#4CAF50' : 
                                   type === 'error' ? '#ff6b6b' : 
                                   '#6c5ce7';
        }
    }

    // ===== ПЛАВНАЯ ПРОКРУТКА =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});