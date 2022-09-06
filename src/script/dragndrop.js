const item = document.querySelector('.item')
const btn = document.querySelector('.btn')
const placeholders = document.querySelectorAll('.placeholder')
const firstHolder = document.querySelector('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
var items = ['item']

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

btn.addEventListener('click', function () {
    items.push(`item${items.length}`)
    newDiv = document.createElement('div')
    newDiv.className = `${items[items.length-1]}`
    newDiv.innerText = 'Перетащи меня'
    let styles = window.getComputedStyle(item)
    let cssText = styles.cssText
    if (!cssText) {
        cssText = Array.from(styles).reduce((str, property) => {
          return `${str}${property}:${styles.getPropertyValue(property)};`;
        }, '');
    }
    newDiv.style.cssText = cssText
    newDiv.setAttribute('draggable', "true")
    firstHolder.appendChild(newDiv)
    var x = document.querySelector(`.${items[items.length-1]}`)
    x.addEventListener('dragstart', dragstart)
    x.addEventListener('dragend', dragend)
    // = `<div class="item${items[items.length-1]}" draggable="true">Перетащи меня</div>`
    // newDiv.innerHTML = 

})

var nameOfClass = undefined

function dragstart(event) {
    nameOfClass = event.target.className
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend() {
    event.target.className = nameOfClass
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(document.querySelector(`.${nameOfClass}`))
}