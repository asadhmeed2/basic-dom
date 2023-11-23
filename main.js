// console.log(document)
const DIRECTIONS ={
    down : "down",
    right : "right",
    left : "left",
    up : "up",
}

const STEPS = 15;
const INITIAL_POSITION = 0;

const playingField = document.getElementById("playing-field")

const downBtn = document.getElementById(DIRECTIONS.down)
const rightBtn = document.getElementById(DIRECTIONS.right)
const leftBtn = document.getElementById(DIRECTIONS.left)
const upBtn = document.getElementById(DIRECTIONS.up)

const ball = document.getElementById("ball")

playingField.style.backgroundColor = "blue"
ball.style.backgroundColor = "yellow"


const DIRECTIONS_STEPS ={
left: { axis:"left" , modifiers:1},
right: { axis:"left" , modifiers:-1},
down: { axis:"top" , modifiers:-1},
up: { axis:"top" , modifiers:1},
asaad: { axis:"left" , modifiers:3},
}

const moveBall = (directionObj)=> {
ball.style[directionObj.axis] = `${parseInt(ball.style[directionObj.axis]   || INITIAL_POSITION )  + (directionObj.modifiers*STEPS) }px`
}


moveBall(DIRECTIONS_STEPS.right)

rightBtn.addEventListener("click",()=>moveBall(DIRECTIONS_STEPS.right)) 
upBtn.onclick = () => moveBall(DIRECTIONS_STEPS.up)
leftBtn.onclick = () => moveBall(DIRECTIONS_STEPS.left)
downBtn.onclick = () => moveBall(DIRECTIONS_STEPS.down)

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

