const board = document.querySelector('#board')
const colors = ['MediumPurple', '#9A7EA6', '#F8B2A1', '#FDE2B1', 'lavender', 'hotpink', 'pink']
const squaresNum = 900

for (let i = 0; i < squaresNum; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    
    if (i != 2 && i != 3 && i != 8 && i != 9 && i != 51 && i != 52 && i != 53 && i != 54 && i != 57 && i != 58 && i != 59 && i != 60 && i != 100 && i != 101 && i != 102 && i != 103 && i != 104 && i != 105 && i != 106 && i != 107 && i != 108 && i != 110 && i != 111 && i != 150 && i != 151 && i != 152 && i != 153 && i != 154 && i != 155 && i != 156 && i != 157 && i != 158 && i != 159 && i != 160 && i != 161 && i != 200 && i != 201 && i != 202 && i != 203 && i != 204 && i != 205 && i != 206 && i != 207 && i != 208 && i != 209 && i != 210 && i != 211 && i != 250 && i != 251 && i != 252 && i != 253 && i != 254 && i != 255 && i != 256 && i != 257 && i != 258 && i != 259 && i != 260 && i != 261 && i != 301 && i != 302 && i != 303 && i != 304 && i != 305 && i != 306 && i != 307 && i != 308 && i != 309 && i != 310 && i != 352 && i != 353 && i != 354 && i != 355 && i != 356 && i != 357 && i != 358 && i != 359 && i != 403 && i != 404 && i != 405 && i != 406 && i != 407 && i != 408 && i != 454 && i != 455 && i != 456 && i != 457 && i != 505 && i != 506 && i != 603 && i != 608 && i != 654 && i != 657 && i != 705 && i != 706 && i != 755 && i != 756 && i != 805 && i != 806 && i != 708 && i != 709 && i != 710 && i != 758 && i != 760 && i != 808 && i != 809 && i != 810 && i != 712 && i != 714 && i != 762 && i != 764 && i != 812 && i != 813 && i != 814) {
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
    }

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function slidesPlugin(activeSlide = 0) {

    const slides = document.querySelectorAll('.slide')
    slides[activeSlide].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
    }
    
slidesPlugin()