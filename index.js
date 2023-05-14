const body = document.querySelector("body");
const container = document.querySelector(".container");
const canvas = document.createElement("div");
const buttons = document.createElement("div");
const header = document.createElement("div");
const footer = document.createElement("div");
let defaultColor = "black";
const h2 = document.createElement("div");
const h3 = document.createElement("div");
const colorInput = document.createElement("input");

canvas.setAttribute("class", "canvas");
buttons.setAttribute("class", "buttons");
header.setAttribute("class", "header");
footer.setAttribute("class", "footer");
h2.setAttribute("class", "h2");
h3.setAttribute("class", "h3");
colorInput.setAttribute("type", "color");
colorInput.setAttribute("value", "black");
colorInput.setAttribute("class", "colorPicker");

header.textContent = "Etch a sketch";

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

//default grid of 20 x 20
grid(20);

// default mouse hover event behavior

container.appendChild(header);
container.appendChild(canvas);
container.appendChild(buttons);
buttons.appendChild(h2);

body.appendChild(container);

h2.textContent = "Grid Size:  ";

// button1 for 60 x 60 grid
const btn1 = document.createElement("button");
btn1.setAttribute("class", "btn");
buttons.appendChild(btn1);
btn1.textContent = "60 x 60";
btn1.addEventListener("click", () => {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.firstChild);
  }
  grid(60);
  fillColor();
});

//button2 for 50x 50 grid
const btn2 = document.createElement("button");
btn2.setAttribute("class", "btn");
buttons.appendChild(btn2);
btn2.textContent = "50 x 50";
btn2.addEventListener("click", () => {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.firstChild);
  }
  grid(50);
  fillColor();
});

//button3 for 20 x 20 grid
const btn3 = document.createElement("button");
btn3.setAttribute("class", "btn");
buttons.appendChild(btn3);
btn3.textContent = "20 x 20";
btn3.addEventListener("click", () => {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.firstChild);
  }
  grid(20);
  fillColor();
});

buttons.appendChild(h3);
h3.textContent = "Choose Color:  ";
// color picker
buttons.appendChild(colorInput);

// fill color onmouseOver
function fillColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.background = colorInput.value;
    });
  });
}

fillColor();

footer.textContent = "Made with ❤️ by Shivangi Vashisth";
body.appendChild(footer);
