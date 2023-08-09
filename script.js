const inside = document.querySelector(".inside");
const firstImg = inside.querySelectorAll("img")[0]; // Corrected 'queryall' to 'querySelectorAll'
const arrowIcons = document.querySelectorAll(".wrapper i"); // Corrected 'queryall' to 'querySelectorAll'

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
const firstImgWidth = firstImg.clientWidth + 25;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    inside.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = inside.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  inside.classList.add("dragging");
  const positionDiff = e.pageX - prevPageX;
  inside.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  inside.classList.remove("dragging");
};

inside.addEventListener("mousedown", dragStart);
inside.addEventListener("mousemove", dragging);
inside.addEventListener("mouseup", dragStop);
