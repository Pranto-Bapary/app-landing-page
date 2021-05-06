/* ------------------------- Preloader --------------------------- */
$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});

$(document).ready(function () {
    /* ----------------- Navbar Shirnk ------------------------- */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /* ----------------- Video Popup -------------------------- */
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "") {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /* ----------------- Features Carousel ----------------------- */
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /* --------------- App Screenshots Carousel -------------------- */
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    /* ---------------- Testimonials Carousel ------------------- */
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /* ----------------- Team Carousel ----------------------- */
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /* ------------------Page Scrolling - ScrollIT-------------- */
    $.scrollIt({
        topOffset: -50
    });

    /* --------------------- Navbar Collapse ----------------- */
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    /* ---------------------  CounterUp  ---------------------- */
    $('.counter').counterUp({
        delay: 15,
        time: 1500
    });

    /* ----------------  Scroll to Top Button  ---------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    });

    $('.topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    /* --------------  Toggle Theme Light & Dark Mode  -------------- */
    function toggleTheme() {
        if (localStorage.getItem('shala-theme') !== null) {
            if (localStorage.getItem('shala-theme') === 'dark') {
                $('body').addClass('dark');
                $('.home').css("background", "transparent");
            } else {
                $('body').removeClass('dark');
                $('.home').css("background", "var(--main-color)");
            }
        }
        updateIcon();
    }

    toggleTheme();

    $('.toggle-theme').click(function () {
        $('body').toggleClass('dark');
        if ($('body').hasClass('dark')) {
            localStorage.setItem('shala-theme', 'dark');
            $('.home').css("background", "transparent");
        } else {
            localStorage.setItem('shala-theme', 'light');
            $('.home').css("background", "var(--main-color)");
        }
        updateIcon();
    });

    function updateIcon() {
        if ($('body').hasClass('dark')) {
            $('.toggle-theme i').removeClass('fa-moon');
            $('.toggle-theme i').addClass('fa-sun');
        } else {
            $('.toggle-theme i').addClass('fa-moon');
            $('.toggle-theme i').removeClass('fa-sun');
        }
    }

});