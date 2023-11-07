function volume_sphere() {
    // Get the value of the radius input field
    var radius = parseFloat(document.getElementById('Radius').value);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere using the formula
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Update the Volume field with the calculated volume
        document.getElementById('Volume').value = volume.toFixed(2);
    } else {
        // If the input is not a valid number, display an error message
        document.getElementById('Volume').value = "Invalid input";
    }

    // Prevent the form from submitting
    return false;
}

// Attach the volume_sphere function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
