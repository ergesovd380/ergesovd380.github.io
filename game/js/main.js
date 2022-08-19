var cvs = document.querySelector('#canvas')
var ctx = cvs.getContext('2d')

alert (
    'Start'
)
// Suratlar
var bird = new Image()
var bg = new Image()
var fg = new Image()
var pipeUp = new Image()
var pipeBottom = new Image()

bird.src = '../img/bird.png'
bg.src = '../img/bg.png'
fg.src = '../img/fg.png'
pipeUp.src = '../img/pipeUp.png'
pipeBottom.src = '../img/pipeBottom.png'

// kolonkalaryn arasyndaky boshluk
var gap = 100

// Gushun pozisiyasy
var xPos = 10
var yPos = 150

//Gush ashak gachyar
var grav = 1.5  


//kolonkalar
var pipe = []
pipe[0] = {
    x: cvs.width,
    y: 0
}

var score = 0

document.addEventListener('mousedown', moveUp)
function moveUp(){
    yPos -= 30
}
document.addEventListener('keydown', moveUp)
function moveUp(){
    yPos -= 30
}

function draw(){
    // Suratlar
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(bird, xPos, yPos)
    ctx.drawImage(fg, 0, cvs.height - fg.height)

    //Sikl hereket etdiryan
    for(var i=0; i<pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)

        pipe[i].x--


        // Kolonkalar chykyar bez konsa
        if(pipe[i].x == 100){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height 
            })
        }


        // Gush degse oyun duryar
        if(xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
                || yPos + bird.height >= cvs.height - fg.height){
            location.reload()
        }
        
        if(pipe[i].x == 5){
            score++
        }
    }

    //Gush ashak gachyar
    yPos += grav


    ctx.fillStyle = "#fff"
    ctx.font = "24px Verdana"
    ctx.fillText("Счет: " + score, 0, cvs.height - 20)   

    requestAnimationFrame(draw)
}
pipeBottom.onload = draw