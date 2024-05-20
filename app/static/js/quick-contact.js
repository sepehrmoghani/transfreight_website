// Button click event to show/hide quick contact
$(".btn").click(function () {
    $(".quick-contact").toggleClass("quick-show");
});

$(".quick-hidden").click(function () {
    $(".quick-contact").removeClass("quick-show");
});

// Form submission event
$("form").submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear the form fields
    $(this).find("input[type=text], input[type=tel], input[type=email], textarea").val("");
});
