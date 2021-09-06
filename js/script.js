// MODAL 
const modalBtns = document.querySelectorAll('.js-btn')
const modalContainer = document.querySelector('.container-modal')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.modal-close')

modalBtns.forEach(modalBtns => {
    modalBtns.onclick = function() {
        modal.classList.add("open")
    }
})

// hide modal
function hideModal() {
    modal.classList.remove("open")
}
modalClose.onclick = hideModal;
modal.onclick = hideModal;

modalContainer.onclick =  function(event) {
    event.stopPropagation()
}



//    NAV
// const navLinks = document.querySelectorAll('.nav-link')
// navLinks.forEach(navLink => {
//     navLink.onclick = function () {
//         $(".nav-link.active").removeClass("active")
//         this.classList.add("active")
//     }
// })
   
$(document).on('scroll', function () {
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

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const scrollPosition = document.documentElement.scrollTop;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollPosition >= (sectionTop - sectionHeight / 5)) {
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
    menuItem.onclick = function() {
        headerMenu.style.display = "none";
    }
})

// slider
$('.slider').slick({
    infinite: true,
    arrows: false,
    // appendArrows: '.control-pre-next',
    dots: true,
    // appendDots: $("dot"),
    // autoplay: true,
    // autoplaySpeed: 3000,
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
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelectorAll(".item-team");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// PORTFOLIO
$(document).ready(function () {
    $(".list").click(function () {
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
      AOS.init( {
        initClassName: 'aos-init',
        offset: 0,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    }); 
