const titleEl = document.getElementById("title");
const image1 = document.getElementById("imageOne");
const image2 = document.getElementById("imageTwo");
const back = document.querySelector('.header__item')
const body = document.querySelector('body')

const random1 = Math.trunc(Math.random() * 6 ) + 1;
const random2 = Math.trunc(Math.random() * 6 ) + 1;

image1.src = `./image-${random1}.png`;
image2.src = `./image-${random2}.png`;

if(random1 > random2){
    titleEl.textContent = "Player 1 winner !"
    image1.style.backgroundColor = 'red'
    back.style.backgroundColor = 'red'
    body.style.backgroundColor = 'red'
}else if(random1 < random2){
    titleEl.textContent = " Player 2 winner !"
    image2.style.backgroundColor = 'blue'
    back.style.backgroundColor = 'blue'
    body.style.backgroundColor = 'blue'
}else{
    titleEl.textContent = "DROW !"
    back.style.background  = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
    body.style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
}
