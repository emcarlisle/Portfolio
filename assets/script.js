// add click events to navbar buttons

$("#portfolio-tab").on("click", function() {
    $("#portfolio-pg").removeClass("d-none");
    $("#home-pg").addClass("d-none");
    $("#contact-pg").addClass("d-none");
})

$("#home-tab").on("click", function() {
    $("#home-pg").removeClass("d-none");
    $("#portfolio-pg").addClass("d-none");
    $("#contact-pg").addClass("d-none");
})

$("#contact-tab").on("click", function() {
    $("#contact-pg").removeClass("d-none");
    $("#home-pg").addClass("d-none");
    $("#portfolio-pg").addClass("d-none");
})