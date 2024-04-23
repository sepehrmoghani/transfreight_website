(function ($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {
        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('header a#to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function () {
        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });
    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $('#more-projects').fadeIn(300);
        });
    });

    $(document).ready(function () {
        $('.dropdown-toggle').dropdown();
    });

    function openForm() {
        document.getElementById("enquiryForm").style.display = "block";
    }

    // Add click event listener to the enquiry button
    enquiryButton.addEventListener("click", function () {
        openForm();
    });

    // Function to pause animations on testimonials hover
    function pauseTestimonialAnimations() {
        var testimonials = document.querySelectorAll('#testimonials .box');
        testimonials.forEach(function (testimonial) {
            testimonial.style.animationPlayState = 'paused';
        });
    }

    // Function to resume animations on testimonials hover out
    function resumeTestimonialAnimations() {
        var testimonials = document.querySelectorAll('#testimonials .box');
        testimonials.forEach(function (testimonial) {
            testimonial.style.animationPlayState = 'running';
        });
    }

    // Add event listeners for testimonials animations
    var testimonialsContainer = document.getElementById('testimonials');
    testimonialsContainer.addEventListener('mouseenter', pauseTestimonialAnimations);
    testimonialsContainer.addEventListener('mouseleave', resumeTestimonialAnimations);

    // Function to handle header animation
    function animateHeaderOnScroll() {
        var header = document.querySelector('.heading');
        var headerPosition = header.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (headerPosition < windowHeight * 0.75) { // Change 0.75 to adjust when to trigger the animation
            header.classList.add('active');
        }
    }

    // Listen for scroll events to trigger header animation
    window.addEventListener('scroll', animateHeaderOnScroll);

    // New code for the overlay and name animation
    document.addEventListener("DOMContentLoaded", function () {
        // Select the overlay and name elements
        var overlay = document.querySelector(".intro-overlay");
        var name = document.querySelector(".intro-name");

        // Listen for scroll events
        window.addEventListener("scroll", function () {
            // Calculate how much the user has scrolled
            var scrollPosition = window.scrollY;

            // Calculate the opacity of the overlay based on scroll position
            var opacity = 1 - (scrollPosition / window.innerHeight);

            // Apply the opacity to the overlay
            overlay.style.opacity = opacity;

            // Move the name element up as the user scrolls
            name.style.transform = "translateY(-" + (scrollPosition / 3) + "px)";
        });

        // Initially hide the overlay and name
        overlay.style.opacity = 1;
        name.style.transform = "translateY(0)";

        // JavaScript to trigger the animation on hover
        const heading = document.querySelector('.heading-fixed');

        heading.addEventListener('mouseenter', function () {
            heading.style.animation = 'revealWave 1s forwards';
        });

        heading.addEventListener('mouseleave', function () {
            heading.style.animation = 'none';
            setTimeout(() => {
                heading.style.animation = 'revealWave 1s forwards';
            }, 50); // Delay to restart animation
        });
    });

    // General enquiry button and popup window
    var enquiryButton = document.querySelector(".enquiry-button");
    var enquiryPopup = document.getElementById("enquiryPopup");

    // to toggle the visibility of the popup
    function togglePopup() {
        if (enquiryPopup.style.display === "none" || enquiryPopup.style.display === "") {
            enquiryPopup.style.display = "block";
        } else {
            enquiryPopup.style.display = "none";
        }
    }

    // Add click event listener to the enquiry button
    enquiryButton.addEventListener("click", function () {
        togglePopup();
    });

    // Function to handle form submission
    $('#enquiryForm').submit(function (e) {
        e.preventDefault();
        // Handle form submission here
    });

    // Function to handle closing the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === enquiryPopup) {
            enquiryPopup.style.display = "none";
        }
    });

    // Button click event to show/hide quick contact
    $(".btn").click(function () {
        $(".quick-contact").toggleClass("quick-show");
    });

    $(".quick-hidden").click(function () {
        $(".quick-contact").removeClass("quick-show");
    });

})(jQuery);

