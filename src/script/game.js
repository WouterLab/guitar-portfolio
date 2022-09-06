const dani = document.getElementById("dani")
const tree = document.getElementById("tree")
const start = document.getElementById("start")
const end = document.getElementById("end")
var score = 0

document.addEventListener("keydown", function(e) {
    if (e.key == " " || e.code == "Space" || e.code == "ArrowUp") {
        jump()
        startGame()
        scoreUp()
    }
})

document.querySelector('.game').addEventListener("touchstart", function(e) {
    jump()
    startGame()
    scoreUp()
})

document.addEventListener("keydown", function(e) {
    if (e.code == "ArrowDown") {
        hide()
        startGame()
    }
})

document.addEventListener("keyup", function(e) {
    if (e.code == "ArrowDown") {
        unhide()
    }
})

function scoreUp() {
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"))
    if (treeLeft < 150)
        plusNum()
}

function startGame() {
    start.style.display = 'none'
    tree.style.display = 'block'
    end.style.display = 'none'
}

function endGame() {
    start.style.display = 'block'
    tree.style.display = 'none'
    end.style.display = 'block'
    score = 0
    updateScore(0)
}

function hide() {
    dani.style.width = '90px'
    dani.style.height = '30px'
    dani.style.top = '165px'
    dani.classList.add("widerun")
    tree.style.top = '120px'
}

function unhide() {
    dani.style.width = '70px'
    dani.style.height = '70px'
    dani.style.top = '135px'
    dani.classList.remove("widerun")
    dani.classList.add("run")
    tree.style.top = '80px'
}

function jump() {
    if (dani.classList != "jump") {
        dani.classList.remove("run")
        dani.classList.add("jump")
    }
    setTimeout(function() {
        dani.classList.remove("jump")
        dani.classList.add("run")
    }, 600)
}

function plusNum() {
    updateScore(++score);
}

function updateScore(num) {
    document.getElementById("score_num").innerHTML = num
}

let isAlive = setInterval( function() {
    let daniTop = parseInt(window.getComputedStyle(dani).getPropertyValue("top"))
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"))

    if (treeLeft < 35 && treeLeft > 0 && daniTop >= 95) {
        start.textContent = 'GAME OVER'
        endGame()
    }
    
}, 10)