document.addEventListener('scroll', function() {
    document.querySelectorAll('.rela-block').forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
});