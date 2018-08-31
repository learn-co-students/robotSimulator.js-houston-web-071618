class Robot {
	//your solution here
  constructor(coordinates=[0,0], bearing="north"){
    this.coordinates = coordinates
    this.bearing = bearing
    this.bearingDegrees = 0
  }
  
  setCoordinates(coordsX, coordsY) {
    this.coordinates = [coordsX, coordsY]
  }
  
  setBearing(newBearing) {
    if (newBearing == "north" || newBearing == "south" || newBearing == "east" || newBearing == "west") {
      this.bearing = newBearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(instructionHash) {
    this.setCoordinates(instructionHash["x"], instructionHash["y"])
    this.setBearing(instructionHash["direction"])
  }
  
  turnRight() {
    if (this.bearing == "north") {
      this.bearing = "east"
      } else if (this.bearing == "east") {
          this.bearing = "south"
      } else if (this.bearing == "south") {
          this.bearing = "west"
      } else if (this.bearing == "west") {
          this.bearing = "north"
      }
  }
  
  turnLeft() {
    if (this.bearing == "north") {
      this.bearing = "west"
      } else if (this.bearing == "east") {
          this.bearing = "north"
      } else if (this.bearing == "south") {
          this.bearing = "east"
      } else if (this.bearing == "west") {
          this.bearing = "south"
      }
  }
  
  advance() {
    let currentX = this.coordinates[0]
    let currentY = this.coordinates[1]
    
    if (this.bearing == "north") {
      this.coordinates=[currentX, currentY+1]
    } else if (this.bearing == "east") {
      this.coordinates=[currentX+1, currentY]
    } else if (this.bearing == "south") {
      this.coordinates=[currentX, currentY-1]
    } else if (this.bearing == "west") {
      this.coordinates=[currentX-1, currentY]
    }
  }

  translateInstructions(instructions) {
    for (var char of instructions) {
      if (char == "L") {
        this.turnLeft()
      } else if (char == "R") {
        this.turnRight()
      } else if (char == "A") {
        this.advance()
      } 
    }
  }  
}