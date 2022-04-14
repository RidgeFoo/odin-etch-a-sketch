// Setup initial grid and page setup
const defaultGridSize = 16;
const maxGridSize = 100;

drawGrid(defaultGridSize);

// Reset the boxes in the grid back to a white background
document.querySelector(".reset").addEventListener("click", () => {
  document
    .querySelectorAll(".grid-box")
    .forEach((el) => (el.style.background = "White"));
});

// Resize the number of boxes in the grid
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
      // Set the boxes within the grid to a height and width that allows them to stay inside their container
      gridBox.style.width = `${boxHeightAndWidth.toString()}px`;
      gridBox.style.height = `${boxHeightAndWidth.toString()}px`;

      // Setup event listener and change box colors
      setGridBoxEventListener(gridBox);

      row.append(gridBox);
    }
  }
}

function setGridBoxEventListener(el) {
  el.addEventListener(
    "mouseenter",
    () => (el.style.background = getRandomColour())
  );
}

function clearGrid() {
  container = document.querySelector(".grid-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getRandomColour() {
  const maxNumber = 255;
  return `rgb(${Math.random() * maxNumber}, ${Math.random() * maxNumber}, ${
    Math.random() & maxNumber
  }`;
}
