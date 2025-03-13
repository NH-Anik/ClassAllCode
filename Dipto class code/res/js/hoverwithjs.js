const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



const mainHover = document.querySelector("#main-hover-btn");

const subHoverBtn = document.querySelector(".sub-hover-btn");

const suHoverBtnInTop = document.querySelector(".sub-hover-btn-in-top");

const subInSubHoverBtnTop = document.querySelector(".sub-in-sub-hover-btn-top");



mainHover.addEventListener("click",()=>{
    subHoverBtn.classList.toggle("show");
    // subHoverBtn.style.display="block"
})

subInSubHoverBtnTop.addEventListener("click",()=>{
    suHoverBtnInTop.classList.toggle("show");
})


mainHover.addEventListener("mouseover",()=>{
    subHoverBtn.style.display="block"
})

mainHover.addEventListener("mouseout",()=>{
    subHoverBtn.style.display="none"
})

