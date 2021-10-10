// MODAL 
const modalBtns = document.querySelectorAll('.js-btn')
const modalContainer = document.querySelector('.container-modal')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.modal-close')

modalBtns.forEach(modalBtns => {
    modalBtns.onclick = function () {
        modal.classList.add("open")
    }
})

// hide modal
function hideModal() {
    modal.classList.remove("open")
}
modalClose.onclick = hideModal;
modal.onclick = hideModal;

modalContainer.onclick = event => event.stopPropagation();
// 
$(document).on('scroll', () => {
    if ($(this).scrollTop() > 260) {
        $('.header').addClass('header-sticky');
    }
    else {
        $('.header').removeClass('header-sticky');
    }
});
// ///
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.nav-item-link')

window.addEventListener('scroll',() => {
    let current = '';
    sections.forEach(section => {
        const scrollPosition = document.documentElement.scrollTop;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= (sectionTop - sectionHeight / 5)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active')
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })

})

// mobile menu
const headerMenu = document.querySelector('.menu-header')
const mobileMenu = document.querySelector('.mobile-menu')
const btnClose = document.querySelector('.btn-close')
const menuItems = document.querySelectorAll('.item-link')

mobileMenu.onclick = function() {
    headerMenu.style.display = "block"
}
btnClose.onclick = function() {
    headerMenu.style.display = "none"
}
menuItems.forEach(menuItem => {
    menuItem.onclick = () => {
        headerMenu.style.display = "none";
    }
})

// slider
$('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    speed: 400,

});

// testimonial
$('.testimonial-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
})

// START
$('.stage-outer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
})
// PORTFOLIO
$(document).ready(function() {
    $(".list").click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $(".gallery-item").show('1000');
        }
        else {
            $(".gallery-item").not('.' + value).hide('1000');
            $(".gallery-item").filter('.' + value).show('1000')
        }
        $(this).addClass('active').siblings().removeClass('active');

    })
})


// PRICING
const plans = document.querySelectorAll('.plan')
plans.forEach(plans => {
    plans.onmouseover = function () {
        $(".plan.active").removeClass("active")
        this.classList.add("active")
    }
    plans.onmouseout = function () {
        $(".plan.active").removeClass("active")
        $(".selected").addClass("active")
    }
})

// AOS animation
AOS.init({
    initClassName: 'aos-init',
    offset: 0,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});


// progress
const textLeft = document.querySelector('.text-left')
const progressBars = document.querySelectorAll('.progress-bar')

window.addEventListener('scroll', () => {
    const sectionPos = textLeft.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.progress;
            progressBar.style.width = `${value}%`;
        })
    }
    function hideProgress() {
        progressBars.forEach(p => {
            p.style.width = 0;
        })

    }

    if (sectionPos < screenPos) {
        showProgress();
    }
    else {
        hideProgress();
    }
})