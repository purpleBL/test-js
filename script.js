

document.addEventListener("touchmove", function (event) {
  if (event.scale !== 1) event.preventDefault();
});



const menuBtn = document.querySelector(".menu-btn");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("menu-btn__active");
};
