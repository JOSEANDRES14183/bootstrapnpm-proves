//Carousel
var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000
});

document.querySelector('#anterior').addEventListener('click', function(){
    carousel.prev();
});

document.querySelector('#siguiente').addEventListener('click', function(){
    carousel.next();
});

document.querySelector('#stop').addEventListener('click', function(){
    carousel.pause();
});

document.querySelector('#continue').addEventListener('click', function(){
    carousel.cycle();
});

//Modal
var myModal = document.querySelector("#myModal");
var modal = new bootstrap.Modal(myModal, {
    backdrop: 'static'
});

document.querySelector('#open-modal').addEventListener('click', function(){
    modal.show();
});