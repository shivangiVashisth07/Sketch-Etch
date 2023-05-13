const body = document.querySelector("body");
const container = document.createElement("div");
const canvas = document.createElement("div");
const modes = document.createElement("div");
const btn = document.createElement("button");
const header = document.createElement("div");

container.setAttribute("class", "container");
canvas.setAttribute("class", "canvas");
modes.setAttribute("class", "modes");
btn.setAttribute("class", "btn");
header.setAttribute("class", "header");

function grid(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < num; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

grid(16);

header.textContent = "Etch a sketch";

btn.appendChild(modes);
container.appendChild(header);
container.appendChild(canvas);
container.appendChild(modes);
body.appendChild(container);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.background = "purple";
  });
});
