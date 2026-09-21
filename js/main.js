const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));


// Hero slider: slide count is read from the HTML automatically.
(() => {
  const track = document.querySelector('.hero-track');
  if (!track) return;

  const slides = [...track.querySelectorAll('.hero-slide')];
  if (slides.length < 2) return;

  const clone = slides[0].cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);

  const slideCount = slides.length;
  let current = 0;
  let moving = false;

  slides.forEach(slide => {
    const preload = new Image();
    preload.src = slide.src;
  });

  setInterval(() => {
    if (moving) return;
    moving = true;
    current++;
    track.style.transform = `translateX(-${current * 100}%)`;

    if (current === slideCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        current = 0;
        track.style.transform = 'translateX(0)';
        void track.offsetWidth;
        track.style.transition = '';
        moving = false;
      }, 1100);
    } else {
      setTimeout(() => { moving = false; }, 1100);
    }
  }, 5000);
})();
