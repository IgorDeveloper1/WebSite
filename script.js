$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toogleClass("active"); 
    });
    
    //escrevendo com animaçoes
    var typed = new Typed(".typing", {
        strings: ["Vale do Iapo"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: true
    })
});