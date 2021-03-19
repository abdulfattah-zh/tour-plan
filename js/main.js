var horelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
 
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: 'reviews-slider__button--next',
    prevEl: 'reviews-slider__button--prev',
  },
 
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft' ) {
    document.querySelector('.hotel-slider__button--prev').click(); 
  }
  else if(event.code == 'ArrowRight'){
    document.querySelector('.hotel-slider__button--next').click(); 
  }
});

   ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [25.14122666,  55.18541349],
          
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
    }