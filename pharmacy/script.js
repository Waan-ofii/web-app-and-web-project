const nav = document.querySelector("nav");
const textColor = document.querySelectorAll(".white");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 70){
        nav.classList.add('nav-scroll');
    }else{
        nav.classList.remove('nav-scroll');
    }
});
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 70){
        textColor.forEach(col=>col.classList.add('white'));
    }else{
        textColor.forEach(col=>col.classList.remove('white'));
    }
});

