let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}



ScrollReveal().reveal('.info-text', {
      delay: 200,
      distance: '50px',
      origin: 'left',
      duration: 800,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.info-image', {
      delay: 300,
      distance: '50px',
      origin: 'right',
      duration: 800,
      easing: 'ease-in-out'
    });


 
  let counterStarted = false;

function startCounter(id, endValue, duration) {
  const element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  const incrementTime = 10;
  const steps = duration / incrementTime;
  const increment = endValue / steps;

  const interval = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(interval);
    }
    element.innerText = Math.floor(start);
  }, incrementTime);
}

function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function triggerCounterOnScroll() {
  const section = document.querySelector(".info-stats");
  if (!section) return;

  if (!counterStarted && isSectionVisible(section)) {
    startCounter("unitCounter", 5000, 1500);
    counterStarted = true;
  }
}

window.addEventListener("scroll", triggerCounterOnScroll);
