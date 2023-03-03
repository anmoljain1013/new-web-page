var thumbs = document.getElementsByClassName("thumbs")
console.log(thumbs);
setTimeout(() => {
    thumbs[0].classList.remove('active')
    thumbs[1].classList.add('active')
}, 2000)
setTimeout(() => {
    thumbs[1].classList.remove('active')
    thumbs[2].classList.add('active')
}, 4000)
setTimeout(() => {
    thumbs[2].classList.remove('active')
    thumbs[3].classList.add('active')
}, 6000)

// var next = document.getElementById('next')
// var prev = document.getElementById('preview')
// var main = document.getElementById('main')

// var bgimg = new Array(
//     "https://picsum.photos/id/237/1366/768",
//     "https://picsum.photos/id/238/1366/768",
//     "https://picsum.photos/id/239/1366/768",
//     "https://picsum.photos/id/240/1366/768"
// );
// let i = 0;
// next.onclick = () => {
//     if (i < 3) {
//         main.style.backgroundImage = 'url("' + bgimg[i + 1] + '")';
//         thumbs[i + 1].classList.add('active');
//         thumbs[i].classList.remove('active');
//         i++;
//     }
// }
// prev.onclick = () => {
//     if (i > 0) {
//         main.style.backgroundImage = 'url("' + bgimg[i - 1] + '")';
//         thumbs[i - 1].classList.add('active');
//         thumbs[i].classList.remove('active');
//         i--;
//     }
// }


