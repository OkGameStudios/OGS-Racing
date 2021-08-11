

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;
const BRAKE_RATE = 1.2

function carClass() {
this.x = 75;
this.y = 75;
this.Ang = 0;
this.Speed = 0;
this.myCarPick;
this.name = "Untitled car"

this.keyHeld_gas = false;
this.keyHeld_reverse = false;
this.keyHeld_turnLeft = false;
this.keyHeld_turnRight = false;
this.keyHeld_brake = false

this.controlKeyUp;
this.controlKeyRight;
this.controlKeyDown;
this.controlKeyLeft;
this.controlKeyBrake
 
this.setupInput = function(upKey, rightKey, downKey, leftKey,brakeKey) {
  this.controlKeyUp = upKey;
  this.controlKeyRight = rightKey;
  this.controlKeyDown = downKey;
  this.controlKeyLeft = leftKey;
  this.controlKeyBrake = brakeKey
}

 this.reset = function(whichImage, carName) {
   this.name = carName
   this.myCarPick = whichImage
   this.Speed = 0

    for (var eachRow=0;eachRow<TRACK_ROWS; eachRow++){     
    for (var eachCOL=0;eachCOL<TRACK_COLS; eachCOL++){

          var arrayIndex = rowColToArrayIndex(eachCOL, eachRow)

          if (TrackGrid[arrayIndex] == TRACK_PLAYERSTART) {
            TrackGrid[arrayIndex] = TRACK_ROAD
            this.Ang = -Math.PI/2
            this.x = eachCOL * TRACK_W + TRACK_W/2
            this.y = eachRow * TRACK_H + TRACK_H/2
            return
          }
    }
}
console.log("No player found")
}

 this.move = function() {
        this.Speed *= GROUNDSPEED_DECAY_MULT

        if(this.keyHeld_gas) {
          this.Speed += DRIVE_POWER;
          }
      if(this.keyHeld_reverse) {
          this.Speed -= REVERSE_POWER;
      }
      if(Math.abs(this.Speed) > MIN_SPEED_TO_TURN){
      if(this.keyHeld_turnLeft) {
          this.Ang -= TURN_RATE;
      }
      if(this.keyHeld_turnRight) {
        this.Ang += TURN_RATE;
      }
      if(this.keyHeld_brake) {
        this.Speed /= BRAKE_RATE
      }
    }
      this.x += Math.cos(this.Ang) * this.Speed
      this.y += Math.sin(this.Ang) * this.Speed
    
      carTrackHandling(this)
    }

 this.draw = function() {        
    drawBitmapCenteredWithRotation(this.myCarPick,this.x, this.y, this.Ang)
}
}