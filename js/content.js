console.log("extension is running!")

// TRY: updating the text content of an element or set of elements on one or more pages
$("h3").hover(function () {
    $(this).css("color", "lightblue");
    startAnimation();

    function startAnimation() {
        h3.animate(
            "background-color", "pink");
    }
});


//TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.
