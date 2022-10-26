(function(){
    const openButton = document.querySelector('.navegador_menu');
    const menu = document.querySelector('.navegador_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('navegador_link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('navegador_link--show');
    });

})();