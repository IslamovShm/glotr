document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".product-slider", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
  
    const likeButtons = document.querySelectorAll(".like");
    const openConfirmModalBtn = document.querySelector(".confirm__modal-btn");
    const closeModalBtn = document.querySelectorAll(".close-btn");
    const modalContainer = document.querySelector(".modal__container");
    const confirmOrderBtn = document.querySelector(".confirm__order-btn");
    const confirmOrderModal = document.querySelector(".confirm__order-modal");
  
    likeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const heartImg = this.querySelector("img");
            const defaultSrc = "img/heart.svg";
            const redSrc = "img/heart-red.svg";

            if (heartImg.getAttribute("src") === defaultSrc) {
                heartImg.setAttribute("src", redSrc);
            } else {
                heartImg.setAttribute("src", defaultSrc);
            }
        });
    });

    openConfirmModalBtn.addEventListener("click", function () {
        modalContainer.classList.add("active");
    });

    closeModalBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            modalContainer.classList.remove("active");
            confirmOrderModal.classList.remove("active");
        });
    })

    confirmOrderBtn.addEventListener("click", function (e) {
        e.preventDefault();
        confirmOrderModal.classList.add("active");
    });
});
  