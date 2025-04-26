// Script untuk mengatur efek hover pada gambar header
const leftImage = document.querySelector('header img:first-of-type');

leftImage.addEventListener('mouseover', function () {
    this.style.opacity = '1';
});

leftImage.addEventListener('mouseout', function () {
    this.style.opacity = '0.5';
});
