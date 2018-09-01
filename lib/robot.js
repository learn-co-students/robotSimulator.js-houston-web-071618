const X = 0;
const Y = 1;

class Robot {
  constructor(bearing = 'north') {
    this.coordinates = [0, 0];
    this.directions = ['north', 'east', 'south', 'west'];
    this.setBearing(bearing);
  }

  setCoordinates(x, y) {
    this.coordinates[X] = x;
    this.coordinates[Y] = y;
  }

  setBearing(bearing) {
    if (this.directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw Error('Invalid Robot Bearing');
    }
  }

  place({ x, y, direction }) {
    console.log(direction);
    this.setCoordinates(x, y);
    this.setBearing(direction);
  }

  turnRight() {
    let index = this.directions.indexOf(this.bearing);

    index = (index + 1) % this.directions.length;
    this.bearing = this.directions[index];
  }

  turnLeft() {
    let directions = this.directions.slice().reverse();
    let index = directions.indexOf(this.bearing);

    index = (index + 1) % directions.length;
    this.bearing = directions[index];

    // let index = this.directions.indexOf(this.bearing);

    // index = index - 1;

    // if (index >= 0) {
    //   this.bearing = this.directions[index];
    // } else {
    //   index += this.directions.length;
    //   this.bearing = this.directions[index];
    // }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[Y] += 1;
        break;

      case 'south':
        this.coordinates[Y] -= 1;
        break;

      case 'east':
        this.coordinates[X] += 1;
        break;

      case 'west':
        this.coordinates[X] -= 1;
        break;
    }
  }

  translateInstructions(instructions) {
    let instructionsArray = instructions.split('');

    instructionsArray.forEach(function(letter) {
      switch (letter) {
        case 'A' || 'a':
          this.advance();
          break;

        case 'R' || 'r':
          this.turnRight();
          break;

        case 'L' || 'l':
          this.turnLeft();
          break;
      }
    }, this);
  }

  // translateInstructions(instructions) {
  //   console.log(instructions);
  //   for (var char of instructions) {
  //     if (char === 'L') {
  //       this.turnLeft();
  //     } else if (char === 'R') {
  //       this.turnRight();
  //     } else if (char === 'A') {
  //       this.advance();
  //     }
  //   }
  // }
}
