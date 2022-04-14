const defaultGridSize = 16;
const maxGridSize = 100;

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
  // This is so that we can add a grid of any size within the etch a sketch
  const container = document.querySelector(".grid-container");
  const boxHeightAndWidth = container.clientHeight / gridSize;
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
      gridBox.style.width = `${boxHeightAndWidth.toString()}px`;
      gridBox.style.height = `${boxHeightAndWidth.toString()}px`;

      // Setup event listener and change box colors
      gridBox.addEventListener("mouseenter", () =>
        gridBox.classList.add("grid-active")
      );

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

// Need to implement 4b in the task. Currently the total number of pixels would change!!
// I'm guessing some sort of flex properties could be used within the containers?
