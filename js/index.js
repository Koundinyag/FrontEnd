//Nav Toogle

const navOpen = document.querySelector('.nav_hamburger');
const navClose = document.querySelector('.close_toggle');
const menu = document.querySelector('.nav_menu');

navOpen.addEventListener('click', () =>{
    const navLeft = menu.getBoundingClientRect().left;

    if(navLeft < 0){
        menu.style.left = "0";
        document.body.classList.add("active");
    }
    else{
        menu.style.left = "-40rem";
        document.body.classList.remove("active");
    }
});

navClose.addEventListener('click', () =>{
    const navLeft = menu.getBoundingClientRect().left;

    if(navLeft > 0){
        menu.style.left = "0";
    }
    else{
        menu.style.left = "-40rem";
        document.body.classList.remove("active");
    }
});