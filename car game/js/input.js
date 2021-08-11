const KEY_LEFT_ARROW = 37
const KEY_UP_ARROW = 38
const KEY_RIGHT_ARROW = 39
const KEY_DOWN_ARROW = 40
const KEY_SPACE = 32

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68
const KEY_SHIFT = 16

var mouseX = 0
var mouseY = 0

function setupInput(){
    canvas.addEventListener('mousemove', updateMousePos)

    document.addEventListener('keydown', keyPresed)
    document.addEventListener('keyup', keyReleased)

    greenCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A, KEY_SHIFT)
    blueCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_SPACE)

}

function updateMousePos(evt){
    var rect = canvas.getBoundingClientRect()
    var root = document.documentElement

     mouseX = evt.clientX - rect.left - root.scrollLeft
     mouseY = evt.clientY - rect.top - root.scrollTop
}

function keyset(keyEvent, whichCar, setTo){
    if (keyEvent.keyCode == whichCar.controlKeyLeft) {
        whichCar.keyHeld_turnLeft = setTo
       }
       if (keyEvent.keyCode == whichCar.controlKeyRight) {
       whichCar.keyHeld_turnRight = setTo
       }
       if (keyEvent.keyCode == whichCar.controlKeyUp) {
        whichCar.keyHeld_gas = setTo
       }
       if (keyEvent.keyCode == whichCar.controlKeyDown) {
        whichCar.keyHeld_reverse = setTo
       }
       if (keyEvent.keyCode == whichCar.controlKeyBrake) {
                whichCar.keyHeld_brake = setTo
            }
}

function keyPresed(evt){
 //  console.log("Key presed: "+evt.keyCode)
keyset(evt, greenCar, true)
keyset(evt, blueCar, true)

   evt.preventDefault()
}

function keyReleased(evt){
    //console.log("Key released: "+evt.keyCode)
        keyset(evt, greenCar, false)
        keyset(evt, blueCar, false)


}