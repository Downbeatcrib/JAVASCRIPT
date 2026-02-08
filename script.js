/* Corrected JavaScript functions for DOM manipulation */

function upDate(previewPic) {
    // Check that the event is triggering
    console.log("Mouse over event triggered");

    // Log the alt and src of the hovered image
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    // Change the text and background image of the div with id='image'
    let displayDiv = document.getElementById("image");

    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Log the reset event
    console.log("Mouse leave event: Resetting gallery");

    // Select the display div
    let displayDiv = document.getElementById("image");

    // Reset background image and text to original values
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}