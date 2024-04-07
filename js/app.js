let headerContainer = document.querySelector('header-container');
window.addEventListener("scroll", function onScrollWindow() {
  const bannerBtn = document.querySelector('.banner-btn');

  bannerBtn.style.bottom = '0px';
  bannerBtn.style.transition = '0.2s ease';
});