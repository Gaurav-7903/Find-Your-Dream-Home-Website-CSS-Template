
const nav_btn = document.getElementById('mobile-nav-toggle');
const primaryNav = document.querySelector('.nav-list');

const btn = document.getElementById('check');
const icon = document.querySelector('#nav-icon')
console.log(btn);

btn.addEventListener('click', () => {
  console.log("click");
  console.log(primaryNav);
  primaryNav.classList.toggle('active-nav');
  console.log(icon);
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-close');
  } else {
    icon.classList.remove('fa-close');
    icon.classList.add('fa-bars');
  }
})


const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  slidesToShow: 1,
  dots: true,
  autoplay : true,
  autoplaySpeed : 4000,
  centerMode: true,
  arrows: true,
  responsive: {
    610 : {
      slidesToShow: 2,
    },
    950 : {
      slidesToShow: 3,
    }
  },
  prevArrow : 'a11y-slider-prev',
  nextArrow : 'a11y-slider-next',
});