document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'a') {
        document.getElementById('intro-screen').style.animation = 'fadeOut 1s forwards';
        setTimeout(function() {
            window.location.href = 'chapter1/story-chap1.html';
        }, 1000);
    }
});
