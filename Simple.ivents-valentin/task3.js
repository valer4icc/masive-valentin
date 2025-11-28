const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', function() {
    hoverBox.classList.add('hovered');
});
hoverBox.addEventListener('mouseleave', function() {
    hoverBox.classList.remove('hovered');
});