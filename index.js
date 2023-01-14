var homeScore = document.getElementById("home-score")
var awayScore = document.getElementById("away-score")
var homeCount = 0
var awayCount = 0
var crownHome = document.getElementById("homeCrown")
var crownAway = document.getElementById("awayCrown")
var homeDigit = document.getElementById("home-digit")
var awayDigit = document.getElementById("away-digit")
function add1Home() {
   homeCount  += 1
   homeScore.innerText = homeCount
}

function add2Home() {
   homeCount += 2
   homeScore.innerText = homeCount
}

function add3Home() {
   homeCount += 3
   homeScore.innerText = homeCount
}

function add1Away() {
   awayCount += 1
   awayScore.innerText = awayCount
}

function add2Away() {
   awayCount += 2
   awayScore.innerText = awayCount
}

function add3Away() {
   awayCount += 3
   awayScore.innerText = awayCount
}

function newGame() {
    awayCount = 0
    awayScore.innerText = awayCount
    homeCount = 0 
    homeScore.innerText = homeCount
}

function awayWinning() {
    while (homeCount < awayCount) {
        crownHome.style.visibility = "hidden"
    }
}

console.log(awayCount)