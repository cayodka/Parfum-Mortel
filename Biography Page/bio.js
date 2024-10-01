document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingScreen = document.getElementById("loading-Screen");
        loadingScreen.classList.add("hidden");
        setTimeout(function() {
            loadingScreen.parentNode.removeChild(loadingScreen);
        });
    }, 2000);
});