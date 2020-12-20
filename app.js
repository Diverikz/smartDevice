// Modal
document.querySelector("#call").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "flex";
  document.body.style.overflow = "hidden";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
  document.body.style.overflow = "visible";
});
