// console.log(document)

const playingField = document.getElementById("playing-field")

const down = document.getElementById("down")
const right = document.getElementById("right")
const left = document.getElementById("left")
const up = document.getElementById("up")

const ball = document.getElementById("ball")

playingField.style.backgroundColor = "blue"
ball.style.backgroundColor = "yellow"


const moveRight = function(){
    ball.style.left = `${parseInt(ball.style.left  || 0)  + 15 }px`
   }
const moveUp = function(){
    ball.style.top = `${parseInt(ball.style.top  || 0)  - 15 }px`
   }
const moveDown = function(){
    ball.style.top = `${parseInt(ball.style.top  || 0)  + 15 }px`
   }
const moveLeft = function(){
    ball.style.left  = `${parseInt(ball.style.left   || 0)  - 15 }px`
   }

right.onclick = moveRight
up.onclick = moveUp
left.onclick = moveLeft
down.onclick = moveDown

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "sub Header"
subHeader.setAttribute('class',"subHeader")
document.body.appendChild(subHeader)


subHeader.onclick = function(){
    const newElement = document.createElement("h2")
    newElement.innerHTML = `new sub header`
    document.body.appendChild(newElement)


}

