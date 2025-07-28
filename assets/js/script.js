
document.addEventListener("DOMContentLoaded", function () {
		accordionFunction();
		presentationSlider();
		openTabs();
		newsSlider();
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
const newsSlider = () => {
  const newsItems = document.querySelectorAll('.news__slider');
  if (!newsItems.length) return;

  newsItems.forEach((newsItem) => {
    const presentItem = newsItem.querySelector('.newsSlider');
    if (!presentItem) return;
    new Swiper(presentItem, {
      slidesPerView: 3,
      spaceBetween:24,
      navigation: {
        nextEl: newsItem.querySelector('.news-button-next'),
        prevEl: newsItem.querySelector('.news-button-prev'),
      },
    });
  });
};

const openTabs = () => {
  const tabGroups = document.querySelectorAll(".target__wrap"); 

  tabGroups.forEach((group) => {
    const tabsLinks = group.querySelectorAll(".target__list-item");
    const allContentBlocks = group.querySelectorAll(".target__content");
    let frontBlockId = tabsLinks[0].dataset.name; 

    function addTabsActive() {
      tabsLinks.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabsLinks.forEach((otherButton) => {
            otherButton.classList.remove("active");
          });
          button.classList.add("active");
          showContent(button.dataset.name, index);
        });
      });
    }

    function updateActiveTab(index) {
      tabsLinks.forEach((button, i) => {
        if (i === index) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    function changeSlide(blockId) {
      allContentBlocks.forEach((block) => {
        if (block.getAttribute("id") === blockId) {
          block.style.display = "flex";
          block.style.opacity = 1;
        } else {
          block.style.opacity = 0;
          block.style.display = "none";
        }
      });
      frontBlockId = blockId;
    }

    function showContent(itemName, index) {
      changeSlide(itemName);
      updateActiveTab(index);
    }
    addTabsActive();
    showContent(frontBlockId, 0); 
  });
};
