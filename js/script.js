// Burger menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('__active');
    menu.classList.toggle('__active');
    body.classList.toggle('__lock');
  })
}

// Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter')

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('__active');
      item.querySelector('.block-filter__icon').classList.toggle('__active');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = event.target.textContent;
      }

    })
  })
}

// Swiper 
const populaSlider = new Swiper('.popular-slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.popular-slider-next',
    prevEl: '.popular-slider-prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    }
  }
});


const reviewsSlider = new Swiper('.slider-reviews', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
});

//Gallery

const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
    })
  })
}