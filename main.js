

const nav = document.querySelector('.nav')

if (window.screenY == 0) {
    nav.classList.remove('active')
}
window.addEventListener('scroll', function () {
    nav.classList.toggle('active', window.scrollY > 720)
})

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('visible')
        }
    })
}
function showSideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hiddenSideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
document.getElementById('openPdfButton').addEventListener('click', function () {
    var pdfUrl = 'CV.pdf';
    window.open(pdfUrl, '_blank');
});
