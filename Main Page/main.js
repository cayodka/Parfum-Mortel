document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingScreen = document.getElementById("loading-Screen");
        loadingScreen.classList.add("hidden");
        setTimeout(function() {
            loadingScreen.parentNode.removeChild(loadingScreen);
        });
    }, 2000);
});

const hoverbuutons = document.querySelector('#img-container');
const audio1 = new Audio('../assets/terror.mp3')

hoverbuutons.addEventListener('mouseover', function() {
  audio1.play();
});

const elementToHover = document.querySelector('#link-container');
const audioElement = new Audio('../assets/turbineterror.mp3')

elementToHover.addEventListener('mouseover', function() {
  audioElement.play();
});

const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  if (link.href === window.location.pathname) {
    link.classList.add('active');
  }
}
