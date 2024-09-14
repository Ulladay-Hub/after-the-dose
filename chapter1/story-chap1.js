document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.story-text');
    let currentIndex = 0;

    function showNextText() {
        if (currentIndex > 0) {
            texts[currentIndex - 1].style.opacity = 0;
        }

        if (currentIndex < texts.length) {
            texts[currentIndex].style.opacity = 1;
            currentIndex++;
            setTimeout(showNextText, 4000);
        }
    }

    showNextText();
});
