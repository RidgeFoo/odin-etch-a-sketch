const gridSize = 16;
const container = document.querySelector(".grid-container");

// Create the grid area
for (let i = 1; i <= gridSize; i++) {
  // Add row
  const row = document.createElement("div");
  row.className = "row";
  container.append(row);
  for (let x = 1; x <= gridSize; x++) {
    // Add boxes within row
    const gridBox = document.createElement("div");
    gridBox.className = "grid-box";

    // Setup event listener and change box colors
    gridBox.addEventListener(
      "mouseenter",
      () => (gridBox.style.background = "black")
    );

    // Sort out borders of box on the outer edges
    if (i === 1) {
      if (x === 1) {
        gridBox.style.borderRadius = "8px 0 0 0";
      } else if (x === gridSize) {
        gridBox.style.borderRadius = "0 8px 0 0";
      }
    } else if (i === gridSize) {
      if (x === 1) {
        gridBox.style.borderRadius = "0 0 0 8px";
      } else if (x === gridSize) {
        gridBox.style.borderRadius = "0 0 8px 0";
      }
    }
    row.append(gridBox);
  }
}

// const boxes = document.querySelectorAll(".grid-box");
// boxes.forEach((box) => {
//   box.addEventListener("mouseenter", () => (box.style.background = "black"));
// });
