//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttribute('style', 'opacity:0;');
  }, 500);
  setTimeout(() => {
    loader.patentNode.removeChild(loader);
    document.body.style.overflow = 'initial';
  }, 1000);
});

















