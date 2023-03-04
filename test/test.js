const imageViewer = document.querySelector('.image-viewer');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let currentPosition = 0;

previousButton.addEventListener('click', () => {
  currentPosition = Math.max(currentPosition - imageViewer.offsetWidth, 0);
  imageViewer.scrollTo({ left: currentPosition, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  currentPosition = Math.min(currentPosition + imageViewer.offsetWidth, imageViewer.scrollWidth - imageViewer.offsetWidth);
  imageViewer.scrollTo({ left: currentPosition, behavior: 'smooth' });
});
