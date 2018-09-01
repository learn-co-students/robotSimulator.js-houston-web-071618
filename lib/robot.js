class Robot {
  constructor(coordinates, bearing) {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    switch (direction) {
      case 'north':
      case 'south':
      case 'east':
      case 'west':
        this.bearing = direction;
        break;
      default:
        throw ('Invalid Robot Bearing');
        break;
    }
  }

  place({x, y, direction}){
    this.setCoordinates(x, y);
    this.setBearing(direction);
  }

  turnRight(){
    switch(this.bearing){
      case 'north':
        this.setBearing('east')
        break;
      case 'east':
        this.setBearing('south')
        break;
      case 'south':
        this.setBearing('west')
        break;
      case 'west':
        this.setBearing('north')
        break;
    }
  }
  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.setBearing('west')
        break;
      case 'east':
        this.setBearing('north')
        break;
      case 'south':
        this.setBearing('east')
        break;
      case 'west':
        this.setBearing('south')
        break;
    }
  }
  advance(){
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch(this.bearing){
      case 'north':
        this.setCoordinates(x, y+1)
        break;
      case 'east':
        this.setCoordinates(x+1, y)
        break;
      case 'south':
        this.setCoordinates(x, y-1)
        break;
      case 'west':
        this.setCoordinates(x-1, y)
        break;
    }
  }

  translateInstructions(letters){
    let instructions = letters.split("")

    for (let instruction of instructions) {
      console.log(instruction)
      switch(instruction){
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    }
  }
}
