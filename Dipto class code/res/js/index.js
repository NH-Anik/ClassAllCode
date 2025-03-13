// function goBack() {
//     window.history.back();
// }


document.getElementById("backToTop").addEventListener("click", function () {
    document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
});

const navbar=document.querySelector(".small-nav-bar");
const navbarBtn=document.querySelector(".main-con-res-btn");
const smallNavbarBtn=document.querySelector(".small-nav-bar");

navbarBtn.addEventListener("click", function(){
    // if(smallNavbarBtn.style.display=="block"){
    //     smallNavbarBtn.style.display="none";
    // }else{
    //     smallNavbarBtn.style.display="block";
    // }

    smallNavbarBtn.classList.toggle("active");

    
});

// function abc(){
//     console.log("hello");
// }


// abc();

