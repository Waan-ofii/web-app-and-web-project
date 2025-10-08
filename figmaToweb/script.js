const nav = document.querySelector("nav");
const navs = document.querySelector("ul");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});

navs.addEventListener('click',function(e){
const clicked = e.target.closest('.navig');
if(!clicked) return;
const number = clicked.dataset.into;
const toWhere = document.querySelector(`.navig-${number}`);
toWhere.scrollIntoView({behavior:'smooth'});
console.log(number);
});

const allSections = document.querySelectorAll('.section');
const revealSection = function(entries,observer){
 const [entry] = entries;
 if(!entry.isIntersecting) return;
 entry.target.classList.remove('section-hidden');
 observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

allSections.forEach(function(section){
sectionObserver.observe(section);
section.classList.add('section-hidden');
});


