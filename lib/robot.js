class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }


  setBearing(direction) {
    const directionsArray = ["north", "south", "east", "west"];
    let found = false;
    directionsArray.forEach(function(element) {
      if ( direction === element){
        found = true;
      }//end if
    })//end forEach
    if (found === true){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  place(placeObject) {
    this.coordinates = [placeObject.x, placeObject.y]
    this.bearing = placeObject.direction
  }

  turnRight() {
      let currentBearing = this.bearing
        switch(currentBearing) {
          case "north":
          this.bearing = "east"
          break;
          case "east":
          this.bearing = "south"
          break;
          case "south":
          this.bearing = "west"
          break;
          case "west":
          this.bearing = "north"
          break;
        }
  }

  turnLeft() {
      let currentBearing = this.bearing
        switch(currentBearing) {
          case "north":
          this.bearing = "west"
          break;
          case "east":
          this.bearing = "north"
          break;
          case "south":
          this.bearing = "east"
          break;
          case "west":
          this.bearing = "south"
          break;
        }
  }

  advance() {
    let currentBearing = this.bearing
    let x = this.coordinates[0]
    let y = this.coordinates[1]
      switch(currentBearing) {
        case "north":
        this.setCoordinates(x, y+1)
        break;
        case "east":
        this.setCoordinates(x+1, y)
        break;
        case "south":
        this.setCoordinates(x, y-1)
        break;
        case "west":
        this.setCoordinates(x-1, y)
        break;
      }
}
  handleMovement(value) {
    switch(value) {
      case "L":
      this.turnLeft()
      break;
      case  "R":
      this.turnRight()
      break;
      case "A":
      this.advance()
      break;
    }
  }

  translateInstructions(input) {
    for (const value of input) {
      this.handleMovement(value)
    }
}


}
