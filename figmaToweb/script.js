const nav = document.querySelector("nav");
const btnTo =document.querySelector(".srvbtn");
const serv = document.querySelector('#service--1');

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});
btnTo.addEventListener('click', function(e){
const coords = serv.getBoundingClientRect();

window.scrollTo(
 coords.left,
 coords.top);
});
