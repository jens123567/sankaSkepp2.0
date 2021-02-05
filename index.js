const rows = 10;
const columns = 10;
const cellSize = "50px";

const grid1 = new Array(10).fill(0).map(() => new Array(10).fill(0));

// genererar mall för objekt
const square = {
  selected: false,
};

// genererar brädet
const battleBoard1 = document.querySelector("#board1");

battleBoard1.style.display = "grid";
battleBoard1.style.gridTemplateColumns = new Array(columns)
  .fill(cellSize)
  .join(" ");
battleBoard1.style.gridTemplateRows = new Array(rows).fill(cellSize).join(" ");

for (let x = 0; x < columns; x++) {
  for (let y = 0; y < rows; y++) {
    const cell = document.createElement("div");
    cell.id = `s:${x}:${y}`;
    let cellid = `s:${x}:${y}`;

    const cellObject = Object.create(square);

    grid1[x][y] = cellid;

    battleBoard1.appendChild(cell);
    cell.addEventListener("click", function () {
      let boatLength = document.getElementById("boatLength").value;

      if (cellObject.selected == true) {
        for (let i = 0; i < boatLength; i++) {
          cellid = `s:${x + i}:${y}`;
          cellObject.selected = false;
          document.getElementById(cellid).style.backgroundColor = "#5d9ad4";
        }
        cellObject.selected = false;
        document.getElementById(cellid).style.backgroundColor = "#5d9ad4";
      } else {
        for (let i = 0; i < boatLength; i++) {
          cellid = `s:${x + i}:${y}`;
          cellObject.selected = true;
          document.getElementById(cellid).style.backgroundColor = "red";
        }
      }
    });

    cell.innerHTML = `s:${x}:${y}`;
  }
}
