class Robot {

	constructor(bearing = "north", coordinates = [0, 0]) {
		this.bearing = bearing;
		this.coordinates = coordinates;
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(bearing) {
		if (bearing.toLowerCase() === "north" || 
			bearing.toLowerCase() === "south" || 
			bearing.toLowerCase() === "east" || 
			bearing.toLowerCase() === "west") {

			this.bearing = bearing;
		}
		 else {
			throw "Invalid Robot Bearing"
		}
	}

	place(robot) {
		this.setCoordinates(robot.x, robot.y);
		this.setBearing(robot.direction);
	}

	turnRight() {
		if (this.bearing === "north") {
			this.bearing = "east"
		} else if (this.bearing === "east") {
			this.bearing = "south"
		} else if (this.bearing === "south") {
			this.bearing = "west"
		} else if (this.bearing === "west") {
			this.bearing = "north"
		}
	}

	turnLeft() {
		if (this.bearing === "north") {
			this.bearing = "west"
		} else if (this.bearing === "east") {
			this.bearing = "north"
		} else if (this.bearing === "south") {
			this.bearing = "east"
		} else if (this.bearing === "west") {
			this.bearing = "south"
		}
	}

	advance() {
		if (this.bearing === "north") {
			this.coordinates = [this.coordinates[0], ++this.coordinates[1]]//[0, 1]
		} else if (this.bearing === "east") {
			this.coordinates = [++this.coordinates[0], this.coordinates[1]]
		} else if (this.bearing === "south") {
			this.coordinates = [this.coordinates[0], --this.coordinates[1]]
		} else if (this.bearing === "west") {
			this.coordinates = [--this.coordinates[0], this.coordinates[1]]
		}
	}

	translateInstructions(input) {
		let instructions = input.split("")
		console.log(instructions)
		instructions.forEach(instruction => {


			if (instruction === "R") {
				this.turnRight();
			} else if (instruction === "L") {
				this.turnLeft();
			} else if (instruction === "A") {
				this.advance();
			}

			// switch(instruction) {
			// 	case "R":
			// 	this.turnRight();
			// 	break;

			// 	case "L":
			// 	this.turnLeft();
			// 	break;

			// 	case "A":
			// 	this.advance();
			// 	break;

			// 	default: 
			// 	break;
			// }
		});
	}













}


