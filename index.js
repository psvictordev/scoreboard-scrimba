// Placar HOME

let homePlacar = document.getElementById("placarHome");
let count = 0;

function onePoint() {
  count += 1;
  homePlacar.innerText = count;
}

function twoPoints() {
  count += 2;
  homePlacar.innerText = count;
}

function threePoints() {
  count += 3;
  homePlacar.innerText = count;
}

// Placar GUEST

let guestPlacar = document.getElementById("placarGuest");
let countGuest = 0;

function onePointGuest() {
  countGuest += 1;
  guestPlacar.innerText = countGuest;
}

function twoPointsGuest() {
  countGuest += 2;
  guestPlacar.innerText = countGuest;
}

function threePointsGuest() {
  countGuest += 3;
  guestPlacar.innerText = countGuest;
}

// Restart Game

function restart() {
  countGuest = 0;
  count = 0;
  guestPlacar.innerText = countGuest;
  homePlacar.innerText = count;
}
