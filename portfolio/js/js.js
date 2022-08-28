const navbarMenu = document.querySelector('.navbar-menu');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click',open);
closeBtn.addEventListener('click',close);

function open(){
    navbarMenu.style.display='flex';
    navbarMenu.style.top = '0%';
}

function close(){
    navbarMenu.style.top = '-110%';
}








const text = 'Front-End Developer';
let counting = 0;
let index = 0;
let letters = '';
let currentText = '';

(function textType(){
    if(counting === text.length){
        counting = 0;

    }
    letters = text.slice(0,++index);
    document.querySelector('.type').textContent = letters;

    if(letters.length === text.length){

     const time = setTimeout (function(){
        clearTimeout(timeOut);
        if(letters.length===text.length){
            clearTimeout(time);
            index=0;
        }
     },3000);

    }
     const timeOut = setTimeout(textType,300);

}());