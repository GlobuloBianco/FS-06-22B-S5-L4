var apriBtn = document.getElementById('apriBtn');
var menuNav = document.getElementById('dropdown')

const toggleClass = () => {
    menuNav.classList.toggle('mostra');
}

apriBtn.addEventListener('click', toggleClass);

//----------------------------//
var h1 = document.querySelector('h1');
var grande = document.getElementById('grande');
var colore = document.getElementById('colore');
var maiuscolo = document.getElementById('maiuscolo');
var nascondi = document.getElementById('nascondi');
var mostrare = document.getElementById('mostrare');

grande.addEventListener('click', () => {
    h1.style.fontSize = '4em';
})

colore.addEventListener('click', () => {
    h1.style.color = 'red';
})

maiuscolo.addEventListener('click', () => {
    h1.style.textTransform = 'uppercase';
})

nascondi.addEventListener('click', () => {
    h1.style.visibility = 'hidden';
})

mostrare.addEventListener('click', () => {
    h1.style.visibility = 'visible';
})
//----------------------------//
const li = document.querySelectorAll('li');
let flag = true;

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        if (flag) {
            li[i].style.textDecoration = 'line-through';
            li[i].style.color = 'gray';
            flag = false;
        } else {
            li[i].style.textDecoration = 'none';
            li[i].style.color = 'black';
            flag = true;
        }
    })
}