const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });    
});

elementos.forEach(element => {
    observer.observe(element);
});