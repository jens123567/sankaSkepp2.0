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
    //cell1.innerHTML = `${x}:${y}`;

    grid1[x][y] = cellid;

    cell1.addEventListener("click", () => {
      click(x, y);
      score();
    });
    cell1.addEventListener("mouseover", () => {
      boatHover(x, y);
    });
    cell1.addEventListener("mouseleave", () => {
      boatLeave(x, y);
    });
  }
}

// is run when cell is clicked
function click(x, y) {
  console.log("klickade");
  if (gamemode1 == 0) {
    placeBoats(x, y);
  } else {
    fire(x, y);
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

    case 2:
      placeThreelong(x, y);
      break;

    case 3:
      placeSub(x, y);
      break;

    default:
      break;
  }
}

// places carrier (5 long boat)
function placeCarrier(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x + 1][y]) ||
      selected1.includes(grid1[x + 2][y]) ||
      selected1.includes(grid1[x + 3][y]) ||
      selected1.includes(grid1[x + 4][y]) ||
      x < 0 ||
      x + 4 > 9
    ) {
    } else {
      for (let i = 0; i < 5; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x + i][y]);
      }
    }
  } else {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x][y + 1]) ||
      selected1.includes(grid1[x][y + 2]) ||
      selected1.includes(grid1[x][y + 3]) ||
      selected1.includes(grid1[x][y + 4]) ||
      y < 0 ||
      y + 4 > 9
    ) {
    } else {
      for (let i = 0; i < 5; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x][y + i]);
      }
    }
  }
}

// places cruiser (4 long boat)
function placeCruiser(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x + 1][y]) ||
      selected1.includes(grid1[x + 2][y]) ||
      selected1.includes(grid1[x + 3][y]) ||
      x < 0 ||
      x + 3 > 9
    ) {
    } else {
      for (let i = 0; i < 4; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x + i][y]);
        console.log(selected1);
      }
    }
  } else {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x][y + 1]) ||
      selected1.includes(grid1[x][y + 2]) ||
      selected1.includes(grid1[x][y + 3]) ||
      y < 0 ||
      y + 3 > 9
    ) {
    } else {
      for (let i = 0; i < 4; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x][y + i]);
        console.log(selected1);
      }
    }
  }
}

// places x (3 long boat)
function placeThreelong(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x + 1][y]) ||
      selected1.includes(grid1[x + 2][y]) ||
      x < 0 ||
      x + 2 > 9
    ) {
    } else {
      for (let i = 0; i < 3; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x + i][y]);
        console.log(selected1);
      }
    }
  } else {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x][y + 1]) ||
      selected1.includes(grid1[x][y + 2]) ||
      y < 0 ||
      y + 2 > 9
    ) {
    } else {
      for (let i = 0; i < 3; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x][y + i]);
        console.log(selected1);
      }
    }
  }
}

// places submarine (2 long boat)
function placeSub(x, y) {
  if (boatOrientation == 0) {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x + 1][y]) ||
      x < 0 ||
      x + 1 > 9
    ) {
    } else {
      for (let i = 0; i < 2; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x + i][y]);
        console.log(selected1);
      }
    }
  } else {
    if (
      selected1.includes(grid1[x][y]) ||
      selected1.includes(grid1[x][y + 1]) ||
      y < 0 ||
      y + 1 > 9
    ) {
    } else {
      for (let i = 0; i < 2; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor = "red";
        let newLength = selected1.push(grid1[x][y + i]);
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

function toggleBoats() {
  if (gamemode1 == 0) {
    for (let i = 0; i < selected1.length; i++) {
      document.getElementById(selected1[i]).style.backgroundColor = "#5d9ad4";
    }

    gamemode1 = 1;
  } else {
    for (let i = 0; i < selected1.length; i++) {
      document.getElementById(selected1[i]).style.backgroundColor = "red";
    }
    gamemode1 = 0;
  }
}

function fire(x, y) {
  if (selected1.includes(grid1[x][y])) {
    document.getElementById(grid1[x][y]).style.backgroundColor = "red";
  } else {
    document.getElementById(grid1[x][y]).style.backgroundColor = "white";
  }
}

function boatHover(x, y) {
  if (gamemode1 == 0) {
    if (boatOrientation == 0) {
      for (let i = 0; i < 5 - boatType1; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor =
          "#5287b9";
        document.getElementById(grid1[x + i][y]).style.transform =
          "scale(1.04)";
      }
    } else {
      for (let i = 0; i < 5 - boatType1; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor =
          "#5287b9";
        document.getElementById(grid1[x][y + i]).style.transform =
          "scale(1.04)";
      }
    }
  } else {
    document.getElementById(grid1[x][y]).style.transform = "scale(1.04)";
  }
}
function boatLeave(x, y) {
  if (gamemode1 == 0) {
    if (boatOrientation == 0) {
      for (let i = 0; i < 5 - boatType1; i++) {
        document.getElementById(grid1[x + i][y]).style.backgroundColor =
          "#5d9ad4";
        document.getElementById(grid1[x + i][y]).style.transform = "scale(1)";
        for (let i = 0; i < selected1.length; i++) {
          document.getElementById(selected1[i]).style.backgroundColor = "red";
        }
      }
    } else {
      for (let i = 0; i < 5 - boatType1; i++) {
        document.getElementById(grid1[x][y + i]).style.backgroundColor =
          "#5d9ad4";
        document.getElementById(grid1[x][y + i]).style.transform = "scale(1)";
        for (let i = 0; i < selected1.length; i++) {
          document.getElementById(selected1[i]).style.backgroundColor = "red";
        }
      }
    }
  } else {
    document.getElementById(grid1[x][y]).style.transform = "scale(1)";
  }
}

function score() {
  document.getElementById(
    "boatsLeft"
  ).innerHTML = `<p>${selected1.length} Båt-delar kvar</p>`;
}
