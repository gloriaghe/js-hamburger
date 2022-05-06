//click burger menù

const buttonBurger = document.querySelector(".fa-bars");

buttonBurger.addEventListener("click",
    function () {
        let burgerVisible = document.querySelector(".hamburger-menu");

        burgerVisible.classList.add("active");
    }
);


