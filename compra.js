// script.js
document.addEventListener("DOMContentLoaded", function() {
    const qtyMinus = document.querySelector('.qty-btn:first-of-type');
    const qtyPlus = document.querySelector('.qty-btn:last-of-type');
    const qtyInput = document.querySelector('.quantity input');
    
    qtyMinus.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });
    
    qtyPlus.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    });

    document.addEventListener('DOMContentLoaded', function() {
        const colorButtons = document.querySelectorAll('.color-btn');
        const productImage = document.querySelector('.product-image img');
    
        colorButtons.forEach(button => {
            button.addEventListener('click', function() {
                const newImage = this.getAttribute('data-image');
                productImage.src = newImage;
            });
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
    
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('open');
        });
    });
    

    // Temporizador de promoción
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateTimer() {
        let totalSeconds = 18 * 60 * 60 + 46 * 60 + 21;
        setInterval(() => {
            totalSeconds--;
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
            minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
            secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
        }, 1000);
    }

    updateTimer();

    document.addEventListener('DOMContentLoaded', function() {
        const productDetails = document.querySelector('.product-details');
        productDetails.classList.add('show');
    });
    
});

//Visibilidad del formulario
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.cart-btn');
    const buyBtn = document.querySelector('.buy-btn');
    const errorForm = document.getElementById('error-form');
    const closeForm = document.getElementById('close-form');
    const colorInput = document.getElementById('color');
    const storageInput = document.getElementById('storage');
    const productInput = document.getElementById('product');

    cartBtn.addEventListener('click', showForm);
    buyBtn.addEventListener('click', showForm);
    closeForm.addEventListener('click', function() {
        errorForm.classList.add('hidden');
    });

    function showForm() {
        const selectedColor = document.querySelector('.color-btn.active');
        const selectedStorage = document.querySelector('.storage-btn.active');

        colorInput.value = selectedColor ? selectedColor.classList[1] : '';
        storageInput.value = selectedStorage ? selectedStorage.textContent : '';
        
        errorForm.classList.remove('hidden');
    }
});