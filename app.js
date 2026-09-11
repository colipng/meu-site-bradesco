'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Alterna a classe 'dark-theme' no <body>
    document.body.classList.toggle('dark-theme');
    
    // Opcional: alternar também a 'light-theme' para manter apenas uma classe por vez
    document.body.classList.toggle('light-theme');

    // Verifica se o tema escuro está ativo
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }

    console.log('current class name: ' + document.body.className);
});