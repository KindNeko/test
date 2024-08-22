const tabContainer = document.querySelector(".tab__button-container");
const tabs = document.querySelectorAll(".tab__button");
const tabsContent = document.querySelectorAll(".tab__content");

const optionsSwiper = {
  slidesPerView: 1.25,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
};
const swiper = new Swiper(".mySwiper", optionsSwiper);
function removeClass(el, cl) {
  el.forEach((item) => {
    item.classList.remove(cl);
  });
}
tabContainer.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".tab__button");
  if (!clickedButton) return;
  removeClass(tabs, "tab__button--active");
  clickedButton.classList.add("tab__button--active");
  removeClass(tabsContent, "tabs__content--active");
  document
    .querySelector(`.tab__content--${clickedButton.dataset.tab}`)
    .classList.add("tabs__content--active");
});
