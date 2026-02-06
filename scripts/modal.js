// Modal script
const modal = document.getElementById("car-modal");
const closeBtn = document.querySelector(".close");
document.querySelectorAll(".buy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("car-title").textContent = btn.dataset.title;
    document.getElementById("car-price").textContent = btn.dataset.price;
    document.getElementById("car-image").src = btn.dataset.img;
    document.getElementById("car-description").textContent = btn.dataset.desc;
    modal.style.display = "flex";
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
