// Animation on Scroll (AOS)
const animateOnScroll = () => {
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: '0px',
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  };
  
  window.onload = () => {
    animateOnScroll();
  };
  