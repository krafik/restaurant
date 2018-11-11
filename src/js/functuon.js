// HIDE/SHOW MOBILE VERSION
(function(){
    var menu = document.querySelector("#header .item-nav");
    var nav = document.querySelector("#header .nav");
    menu.addEventListener('click', function(){
        if(!this.classList.contains('item-nav-close')){
            this.classList.add('item-nav-close');
            nav.classList.add('show-item-nav');
        }else{
            this.classList.remove('item-nav-close');
            nav.classList.remove('show-item-nav');
        }

    });
})();