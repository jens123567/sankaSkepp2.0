const rows = 10;
const columns = 10;
const cellSize = "50px";

let boatOrientation = 0;
let boatType1 = 0;
let gamemode1 = 0;
let selected1 = [];

// generates board 1
const grid1 = new Array(10).fill(0).map(() => new Array(10).fill(0));

const battleBoard1 = document.querySelector("#board1");

battleBoard1.style.display = "grid";
battleBoard1.style.gridTemplateColumns = new Array(columns)
  .fill(cellSize)
  .join(" ");
battleBoard1.style.gridTemplateRows = new Array(rows).fill(cellSize).join(" ");

for (let x = 0; x < columns; x++) {
  for (let y = 0; y < rows; y++) {
    const cell1 = document.createElement("div");
    battleBoard1.appendChild(cell1);

    cell1.id = `a:${x}:${y}`;
    let cellid = `a:${x}:${y}`;
    cell1.innerHTML = `${x}:${y}`;

    grid1[x][y] = cellid;

    cell1.addEventListener("click", () => {
      click(x, y);
    });
  }
}

// is run when cell is clicked
function click(x, y) {
  console.log(boatType1);
  console.log("klickade");
  if (gamemode1 == 0) {
    placeBoats(x, y);
  } else {
    console.log("gamemode not here");
  }
}

// place boats
function placeBoats(x, y) {
  switch (boatType1) {
    case 0:
      console.log("carrier");
      placeCarrier(x, y);
      break;

    case 1:
      placeCruiser(x, y);
      break;

    default:
      break;
  }
}

// places carrier (5 long boat)
function placeCarrier(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(`a:${x}:${y}`) ||
      selected1.includes(`a:${x - 1}:${y}`) ||
      selected1.includes(`a:${x - 2}:${y}`) ||
      selected1.includes(`a:${x - 3}:${y}`) ||
      selected1.includes(`a:${x - 4}:${y}`)
    ) {
      console.log("error");
    } else {
      for (let i = 0; i < 5; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(`a:${x}:${y}`);
        console.log(selected1);
      }
    }
  } else {
    if (
      selected1.includes(`a:${x}:${y}`) ||
      selected1.includes(`a:${x}:${y - 1}`) ||
      selected1.includes(`a:${x}:${y - 2}`) ||
      selected1.includes(`a:${x}:${y - 3}`) ||
      selected1.includes(`a:${x}:${y - 4}`)
    ) {
      console.log("error");
    } else {
      for (let i = 0; i < 5; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(`a:${x}:${y}`);
        console.log(selected1);
      }
    }
  }
}

// places cruiser (4 long boat)
function placeCruiser(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(`a:${x}:${y}`) ||
      selected1.includes(`a:${x - 1}:${y}`) ||
      selected1.includes(`a:${x - 2}:${y}`) ||
      selected1.includes(`a:${x - 3}:${y}`)
    ) {
      console.log("error");
    } else {
      for (let i = 0; i < 4; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(`a:${x}:${y}`);
        console.log(selected1);
      }
    }
  } else {
    if (
      selected1.includes(`a:${x}:${y}`) ||
      selected1.includes(`a:${x}:${y - 1}`) ||
      selected1.includes(`a:${x}:${y - 2}`) ||
      selected1.includes(`a:${x}:${y - 3}`)
    ) {
      console.log("error");
    } else {
      for (let i = 0; i < 4; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(`a:${x}:${y}`);
        console.log(selected1);
      }
    }
  }
}

function boatRotation() {
  if (boatOrientation == 0) {
    boatOrientation = 1;
  } else {
    boatOrientation = 0;
  }
}

function boatLength() {
  console.log(boatType1);
  if (boatType1 <= 2) {
    boatType1++;
  } else {
    boatType1 = 0;
  }
}
