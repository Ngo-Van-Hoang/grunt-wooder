function headerBgr() {
    window.addEventListener("scroll", function() {
        let selHeader = document.querySelector(".header");
        let locationScroll = window.pageYOffset;
        // let heightWindow = window.innerHeight;
        if (locationScroll > 600) {
            selHeader.style.background = "black";
        } else {
            selHeader.style.background = "none";
        }
    })
}
headerBgr();

function backToTop() {
    let selBtnTop = document.querySelector(".btntop");
    window.addEventListener("scroll", function() {
        let heightWindow = window.innerHeight;
        let scrollY = window.pageYOffset;
        if (scrollY > heightWindow) {
            selBtnTop.classList.add("active");
        } else {
            selBtnTop.classList.remove("active")
        }
    });

    selBtnTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0
        })
    })
}
backToTop();

function langGuaGe() {
    let selLang = document.querySelector(".header__lang");
    let selLangItem = document.querySelectorAll(".header__lang-select .item");
    let setLangCurrentSpan = document.querySelector(".header__lang .header__lang-current .text");
    selLang.addEventListener("click", function(event) {
        event.stopPropagation();
        this.classList.toggle("active");
    });
    selLangItem.forEach(function(item) {
        item.addEventListener("click", function() {
            let addText = this.textContent;
            let LangCurrentSpan = setLangCurrentSpan.textContent;
            setLangCurrentSpan.innerHTML = addText;
            this.innerHTML = LangCurrentSpan;
        })
    });
    document.addEventListener("click", function() {
        selLang.classList.remove("active");
    })
}
langGuaGe();

function navMenu() {
    let selBtnMenu = document.querySelector(".btnmenu");
    let selNav = document.querySelector(".nav");

    selBtnMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        selNav.classList.toggle("active");
    })

    function hideMenu() {
        selBtnMenu.classList.remove("active");
        selNav.classList.remove("active");
    }

    window.addEventListener("resize", function() {
        let widthWindow = this.innerWidth;
        if (widthWindow > 992) {
            hideMenu();
        }
    })
}
navMenu();

function popupVideo() {
    let selVideos = document.querySelectorAll(".scvideos__list .scvideos__list-item .videos"),
        selPopupVideo = document.querySelector(".popupvideo"),
        selIframe = document.querySelector(".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"),
        selClose = document.querySelector(".popupvideo .popupvideo__inner .popupvideo__inner-iframe .close");

    selVideos.forEach(function(item) {
        item.addEventListener("click", function() {
            selPopupVideo.classList.add("active");

            let getDataId = item.getAttribute("data-video-src");
            selIframe.setAttribute("src", `https://www.youtube.com/embed/${getDataId}?autoplay=1`);
        });

        function closeHandle() {
            selPopupVideo.classList.remove("active");
            selIframe.setAttribute("src", ``);

        }
        selClose.addEventListener("click", function() {
            closeHandle();
        })
        selPopupVideo.addEventListener("click", function() {
            closeHandle();
        })
    })
}
popupVideo();

function scrollToSection() {
    let selMenu = document.querySelectorAll(".header .header__menu a"),
        heightHeader = document.querySelector(".header").offsetHeight;
    let sections = [];

    function removeActiveMenu() {
        selMenu.forEach(function(menu_item) {
            menu_item.classList.remove("active");
        });
    }
    selMenu.forEach(function(item) {
        let href = item.getAttribute("href");
        let className = href.replace("#", "");
        let section = document.querySelector("." + className);
        sections.push(section);
        item.addEventListener("click", function(e) {
            e.preventDefault();
            let locationSection = section.offsetTop;
            window.scrollTo({
                top: locationSection - heightHeader + 1
            });
            removeActiveMenu();
            item.classList.add("active");
        });
    });
    window.addEventListener("scroll", function(e) {
        let locationScroll = window.pageYOffset;
        sections.forEach(function(sc, index) {
            if (locationScroll > sc.offsetTop - heightHeader && locationScroll < sc.offsetTop - heightHeader + sc.offsetHeight) {
                removeActiveMenu();
                selMenu[index].classList.add("active");
            } else {
                selMenu[index].classList.remove("active");
            }
        })
    })
};
scrollToSection();

function tabNews() {
    let selTabs = document.querySelectorAll(".scnews__tabs .scnews__tabs-item");
    let selList = document.querySelectorAll(".scnews__list");

    selTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            selTabs.forEach(function(tab) {
                tab.classList.remove("active");
            })
            this.classList.add("active");

            selList.forEach(function(list) {
                list.classList.remove("active");
            })
            let getId = this.getAttribute("data-tab");
            document.querySelector(".news__list-" + getId).classList.add("active");
        });
    });
};
tabNews();

function accordion() {
    let selAccordion = document.querySelectorAll(".scaccordion__accordion");

    selAccordion.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    })
}
accordion();

// function slider() {
//     let selSlider = document.querySelectorAll(".scslider__list-slide"),
//         selNumber = document.querySelector(".scslider__bottom-paging .number"),
//         selDots = document.querySelectorAll(".scslider__bottom-paging .dots ol li"),
//         selNext = document.querySelector(".btnctr.--next"),
//         selPrev = document.querySelector(".btnctr.--prev"),
//         currentSlider = 0;
//     console.log(selDots);
//     selSlider.forEach(function(itemSlider, index) {
//         if (itemSlider.classList.contains("active")) {
//             currentSlider = index;
//         };
//     });
//     selNext.addEventListener("click", function() {
//         if (currentSlider < selSlider.length - 1) {
//             goTo(currentSlider + 1);
//         } else {
//             goTo(0);
//         }
//     });
//     selPrev.addEventListener("click", function() {
//         if (currentSlider > 0) {
//             goTo(currentSlider - 1);
//         } else {
//             goTo(selSlider.length - 1);
//         }
//     })

//     function goTo(index) {
//         selSlider[currentSlider].classList.remove("active");
//         selSlider[index].classList.add("active");
//         selDots[currentSlider].classList.remove("active");
//         selDots[index].classList.add("active");
//         currentSlider = index;
//         selNumber.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
//     }
//     selDots.forEach(function(dot, index) {
//         dot.addEventListener("click", function() {
//             goTo(index);
//         })
//     })
// };
// slider();

function handelSliderHero() {
    let selSlider = document.querySelector('.scslider__list');
    let flktySlider = new Flickity(selSlider, {
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButtons: false,
        // pageDots: false,
        wrapAround: true,
        // autoPlay: true, //3s
        // pauseAutoPlayOnHover: false,
        on: {
            ready: function() {
                handelDotsSlider();
            },
            change: function(index) {
                handelNumberSlider(index);

            }
        }
    });
    let selPrev = document.querySelector(".btnctr.--prev");
    let selNext = document.querySelector(".btnctr.--next");
    selPrev.addEventListener("click", function() {
        flktySlider.previous(true);
    });
    selNext.addEventListener("click", function() {
        flktySlider.next(true);
    });

    function handelDotsSlider() {
        let selDotsSlider = document.querySelector(".flickity-page-dots");
        let selDots = document.querySelector(".scslider__bottom-paging");
        selDots.appendChild(selDotsSlider)
    }

    function handelNumberSlider(index) {
        let selNumber = document.querySelector(".scslider__bottom-paging .number");
        selNumber.innerHTML = (index + 1).toString().padStart(2, "0")
    }
}

function fancyBox() {
    fancyBox.bind("[data-fancybox]", {
        infinite: false,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev",
        },
        on: {
            ready: (fancybox) => {
                console.log(`fancybox #${fancybox.id} is ready!`);
            }
        },
        caption: function(fancybox, carousel, slide) {

        }
    })
}
fancyBox();

function handelGallerySlider() {
    let selSlider = document.querySelector('.scgalleryslider');
    let flktySlider = new Flickity(selSlider, {
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        lazyLoad: true,
        // autoPlay: true, //3s
        // pauseAutoPlayOnHover: false,
        // on: {
        //     ready: function() {
        //         handelDotsSlider();
        //     },
        //     change: function(index) {
        //         handelNumberSlider(index);

        //     }
        // }
    });
}

window.addEventListener("load", function() {
    handelGallerySlider();
    handelSliderHero();
})