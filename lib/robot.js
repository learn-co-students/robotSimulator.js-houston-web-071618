class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(newX, newY) {
    this.coordinates = [newX, newY]
  }

  setBearing(newBear) {
    if (newBear == 'north' || newBear == 'south' || newBear == 'east' || newBear == 'west') {
      this.bearing = newBear
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(newPlace) {
    this.coordinates = [newPlace.x, newPlace.y]
    this.bearing = newPlace.direction
  }

  turnRight() {
    if (this.bearing == "north") {
      this.bearing = "east"
    } else if (this.bearing == 'east') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'west'
    } else if (this.bearing == 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if (this.bearing == "north") {
      this.bearing = "west"
    } else if (this.bearing == 'west') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'east'
    } else if (this.bearing == 'east') {
      this.bearing = 'north'
    }
  }

  advance() {
    if (this.bearing == "north") {
      this.coordinates[1]++
    } else if (this.bearing == 'west') {
      this.coordinates[0]--
    } else if (this.bearing == 'south') {
      this.coordinates[1]--
    } else if (this.bearing == 'east') {
      this.coordinates[0]++
    }
  }

  translateInstructions(instruct) {
    let a = instruct.split("")
    a.forEach(function(element) {
      if (element == "L") {
        this.turnLeft()
      } else if (element == "R") {
        this.turnRight()
      } else if (element == "A") {
        this.advance()
      }
    }.bind(this))
  }

}
