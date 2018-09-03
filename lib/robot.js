//Kevin's 
const X = 0;
const Y = 1;
class Robot {
	//your solution here
	constructor() {
		this.coordinates = [0, 0];
		this.bearing = "north";
		this.directions = ['north', 'east', 'south', 'west'];
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
		this.setCoordinates(x, y);
		this.setBearing(direction);
	}

	turnRight() {
		let index = this.directions.indexOf(this.bearing)
		//how to loop through an array endlessly.
		index = (index + 1) % (this.directions.length);
		this.bearing = this.directions[index];
	}
	turnLeft() {
		//directions.slice().reverse()
		//math behind it: 4 - 0 % 4

		let directions = this.directions.slice().reverse();
		let index = directions.indexOf(this.bearing)
		//how to loop through an array endlessly.
		index = (index + 1) % (directions.length);
		this.bearing = directions[index];

		// let index = this.directions.indexOf(this.bearing)
		// index = (index - 1)
		// if (index >= 0) {
		// 	this.bearing = this.directions[index];
		// } else {
		// 	index += this.directions.length;
		// 	this.bearing = this.directions[index];
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

	// advance() {
	// 	switch (this.bearing) {
	// 		case "north":
	// 			y += 1;
	// 			break;
	// 		case "south":
	// 			y -= 1;
	// 			break;
	// 		case "east":
	// 			x += 1;
	// 			break;
	// 		case "west":
	// 			x -= 1;
	// 			break;
	// 	}
	// 	return this.coordinates = [x, y];
	// }

	// translateInstructions(instructions) {
	// 	console.log(instructions)
	// 	for (var char of instructions) {
	// 		if (char === "L") {
	// 			this.turnLeft();
	// 		} else if (char === "R") {
	// 			this.turnRight();
	// 		} else if (char === "A") {
	// 			this.advance();
	// 		}
	// 	}
	// }


	translateInstructions(instructions) {
		let instructionsArr = instructions.toLowerCase().split('');

		instructionsArr.forEach(function (letter) {
			switch (letter) {
				case 'a':
					this.advance();
					break;

				case 'r':
					this.turnRight();
					break;

				case 'l':
					this.turnLeft();
					break;
			}
		}, this);
	}
}
