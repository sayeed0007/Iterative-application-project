function redirectOnChange() {
    var selectElement = document.getElementById("location");
    var selectedValue = selectElement.value;

    // Define the URLs for each location
    var locationURLs = {
        "jyvaskyla": "jyvaskyla.html",
        "turuk": "turuk.html",
        "lahti": "lahti.html",
        "helsenki": "helsenki.html",
        "default": "index.html"
    };

    window.location.href = locationURLs[selectedValue];
}