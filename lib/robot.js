class Robot {
  constructor() {
    this.coordinates = [0,0];
    this.bearing = "north";
    this.validBearings = ["north", "south", "east", "west"];
    // test error: doesn't handle invalid ones
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    //console.log(this)
    if (this.validBearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y);
    this.setBearing(placement.direction);
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    } else if (this.bearing === "east") {
      this.bearing ="south"
    }

  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    }
  }

  advance() {
    //depending on which way it's facing, you'll +/- one to the x/y coordinate
    if(this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    }

  }

  translateInstructions(instruction) {
    for (let i = 0; i < instruction.length; i++) {
      if (instruction.charAt(i) === "A") {
        this.advance()
      } else if (instruction.charAt(i) === "L") {
        this.turnLeft()
      } else if (instruction.charAt(i) === "R") {
        this.turnRight()
      }
    }
  }
}

ryhan = new Robot()
