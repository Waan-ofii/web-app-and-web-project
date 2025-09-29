const nav = document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 70){
        nav.classList.add("nav-scroll");
    }else{
        nav.classList.remove("nav-scroll");
    }
});
