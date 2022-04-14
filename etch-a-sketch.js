const defaultGridSize = 16;
const maxGridSize = 100;

const topLeftRounded = "8px 0 0 0";
const topRightRounded = "0 8px 0 0";
const bottomLeftRounded = "0 0 0 8px";
const bottomRightRounded = "0 0 8px 0";

drawGrid(defaultGridSize);

document.querySelector(".reset").addEventListener("click", (e) => {
  document
    .querySelectorAll(".grid-box")
    .forEach((el) => el.classList.remove("grid-active"));
});

document.querySelector(".resize").addEventListener("click", () => {
  let keepGoing = true;
  while (keepGoing) {
    response = prompt("What size grid would you like?", defaultGridSize);
    const gridSize = parseInt(response);
    if (gridSize !== NaN && gridSize <= maxGridSize) {
      keepGoing = false;
      drawGrid(gridSize);
    }
  }
});

function drawGrid(gridSize) {
  clearGrid();
  const container = document.querySelector(".grid-container");
  // Create the grid area
  for (let i = 1; i <= gridSize; i++) {
    // Add row
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);

    // Add boxes within row
    for (let x = 1; x <= gridSize; x++) {
      const gridBox = document.createElement("div");
      gridBox.className = "grid-box";

      // Setup event listener and change box colors
      gridBox.addEventListener("mouseenter", () =>
        gridBox.classList.add("grid-active")
      );

      // Sort out borders of box on the outer edges
      if (i === 1) {
        if (x === 1) {
          gridBox.style.borderRadius = topLeftRounded;
        } else if (x === gridSize) {
          gridBox.style.borderRadius = topRightRounded;
        }
      } else if (i === gridSize) {
        if (x === 1) {
          gridBox.style.borderRadius = bottomLeftRounded;
        } else if (x === gridSize) {
          gridBox.style.borderRadius = bottomRightRounded;
        }
      }

      row.append(gridBox);
    }
  }
}

function clearGrid() {
  container = document.querySelector(".grid-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
