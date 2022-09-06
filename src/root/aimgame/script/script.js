const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('.board')
let time = 0
score = 0

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    //делигирование
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNum(20, 90)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNum(0, width - size)
    const y = getRandomNum(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `linear-gradient(${getRandomNum(45, 180)}deg, #${randColor()} 0%, #${randColor()} 47%, #${randColor()} 100%)`
    board.append(circle)
}

function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randColor() {
    var color = Math.floor(Math.random() * 16777216).toString(16)
    return color
}

function winTheGame(time) {
    function kill() {
        const circle = document.querySelector('.circle')
        if (circle) {
            circle.click()
        }
    }
    setInterval(kill, time)
}