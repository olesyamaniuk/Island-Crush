

$(function () {

    $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery-list-left',
    nextArrow: '.gallery-list-right',
    customPaging: () => `<img src="/image/gallery/Component 4.png" alt="dot" class="custom-dot">`
  });

  $('.gallery__list').on('afterChange', (event, slick, currentSlide) => {
    $('.gallery__list .slick-dots li').each((index, dot) => {
      const imagePath = (index === currentSlide) ? '/image/gallery/Component 2.png' : '/image/gallery/Component 4.png';
      $(dot).find('img').attr('src', imagePath);
    });
  });
});


$(function () {
  $('.reviews-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.reviews-list-left',
    nextArrow: '.reviews-list-right',
  });
});







