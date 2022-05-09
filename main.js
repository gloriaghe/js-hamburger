//click burger menù

const buttonBurger = document.querySelector(".header-right>a");

buttonBurger.addEventListener("click",
    function () {
        let burgerVisible = document.querySelector(".hamburger-menu");

        burgerVisible.classList.add("active");
    }
);


//chiusura burger menù

const buttonClose = document.querySelector(".hamburger-menu>a");

buttonClose.addEventListener("click",
    function () {
        let burgerINVisible = document.querySelector(".hamburger-menu");

        burgerINVisible.classList.remove("active");
    }
);

//chiusura automatica

let windows

window.addEventListener("resize", 
    function() {
        let burgerINVisible = document.querySelector(".hamburger-menu");

        burgerINVisible.classList.remove("active");    
    },
);





