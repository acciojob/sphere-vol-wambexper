// script.js
function volume_sphere() {
    // Get the radius value from the input field
    var radius = document.getElementById("radius").value;

    // Check if the input is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the output field
    document.getElementById("volume").value = volume.toFixed(2); // Round to 2 decimal places
}
