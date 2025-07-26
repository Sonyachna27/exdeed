
document.addEventListener("DOMContentLoaded", function () {
		accordionFunction();
		presentationSlider();
});

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");
  accordionItems.forEach((item) => {
		const top = item.querySelector(".accord-item-top");
		if(top){
			top.addEventListener("click", function () {
				item.classList.toggle("active");
			});
		}
  });
};
const presentationSlider = () => {
  const presentationItems = document.querySelectorAll('.presentation__slider');
  if (!presentationItems.length) return;

  presentationItems.forEach((presentationItem) => {
    const presentItem = presentationItem.querySelector('.presentationSlider');

    if (!presentItem) return;

    new Swiper(presentItem, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: presentationItem.querySelector('.presentation-pagination'),
        type: 'bullets',
				clickable: true,
      },
      navigation: {
        nextEl: presentationItem.querySelector('.presentation-button-next'),
        prevEl: presentationItem.querySelector('.presentation-button-prev'),
      },
    });
  });
};
