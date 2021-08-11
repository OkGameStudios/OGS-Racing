var canvas, canvasContext;

var greenCar = new carClass()
var blueCar = new carClass()
var levels = 1

window.onload = function() {
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d')

    colorRect(0,0,canvas.width,canvas.height, 'black')
    colorText("Loading Images", canvas.width/2, canvas.height/2,'white')

    loadImages()
}
function imageLoadingDoneSoStartGame() {    
    var framesPerSecond = 30
    setInterval(updateAll, 1000/framesPerSecond)

    setupInput()
    loadLevel(levelOne)
   
    }
function loadLevel(whichLevel) {
    TrackGrid = whichLevel.slice()
    //levelList= whichLevel.slice()
    greenCar.reset(carPick, "The Gator")
    blueCar.reset(car2Pick, "Ocean Storm")
    }

function updateAll() {
    moveAll()
    drawAll()
}
          
function moveAll(){
    greenCar.move()
    blueCar.move()
   }
  
 function drawAll(){ 
   drawTracks()
   greenCar.draw()
   blueCar.draw()
}