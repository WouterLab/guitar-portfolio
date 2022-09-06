const backgr = document.getElementById('backgr')
const button = document.getElementById('getnft')
const duckimg = document.getElementById('duckimg')
const duck = document.getElementById('duck')
const nft = document.getElementById('nft')
const contact = document.getElementById('contact')
var image = ['img/duck-gen/Ducky-1.png','img/duck-gen/Ducky-2.png','img/duck-gen/Ducky-3.png','img/duck-gen/Ducky-4.png','img/duck-gen/Ducky-5.png','img/duck-gen/Ducky-6.png','img/duck-gen/Ducky-7.png','img/duck-gen/Ducky-8.png','img/duck-gen/Ducky-9.png','img/duck-gen/Ducky-10.png','img/duck-gen/Ducky-11.png','img/duck-gen/Ducky-12.png','img/duck-gen/Ducky-13.png','img/duck-gen/Ducky-14.png','img/duck-gen/Ducky-15.png','img/duck-gen/Ducky-16.png','img/duck-gen/Ducky-17.png','img/duck-gen/Ducky-18.png','img/duck-gen/Ducky-19.png','img/duck-gen/Ducky-20.png','img/duck-gen/Ducky-21.png','img/duck-gen/Ducky-22.png','img/duck-gen/Ducky-23.png','img/duck-gen/Ducky-24.png','img/duck-gen/Ducky-25.png',]

const genColor = () => {
    let hue = Math.floor(Math.random() * 360)
    let pastel = `hsl(${hue}, 50%, 85%)`
    return pastel;
  }

randImg = () => {
    var num = Math.floor(Math.random() * 25)
    return image[num]
}

button.addEventListener('click', changeContent = () => {
    backgr.style.backgroundColor = genColor()
    contact.style.backgroundColor = 'white'
    contact.style.color = 'black'
    duckimg.style.backgroundImage = 'none'
    duck.style.display = 'none'
    nft.style.display = 'block'
    // duck.style.width = '400px'
    //duck.src = randImg()
    nft.src = randImg()
})