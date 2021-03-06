new Swiper('.popular-excursions__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    autoplay: {
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    slidesPerView: 3.5,

});

new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    autoplay: {
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    slidesPerView: 2,
});