let homeScore = 0
let homeEl = document.getElementById("home-score") 

function button1(){
    homeScore += 1
   homeEl.textContent = homeScore
}

function button2(){
    homeScore += 2
   homeEl.textContent = homeScore
}

function button3(){
    homeScore += 3
   homeEl.textContent = homeScore
}
let awayScore = 0
let awayEl = document.getElementById("away-score") 

function button4(){
    awayScore += 1
   awayEl.textContent = awayScore
}

function button5(){
    awayScore += 2
   awayEl.textContent = awayScore
}

function button6(){
    awayScore += 3
   awayEl.textContent = awayScore
}

function reset(){
    homeScore = 0
    awayScore = 0
    homeEl.textContent = homeScore
    awayEl.textContent = awayScore
}
