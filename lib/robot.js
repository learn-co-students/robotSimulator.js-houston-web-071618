class Robot {
	constructor(bearing = 'north') {

		this.coordinates = [0, 0];
		this.bearing = bearing;
		this.validBearings = ["north", "south", "east", "west"]
	}

	setCoordinates(x, y) {
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}

	setBearing(bearing) {
		const directions = ['north', 'south', 'east', 'west']
		if (directions.includes(bearing)) {

			this.bearing = bearing;
		} else {
			throw new Error('Invalid Robot Bearing');
		}
	}

	place(object) {
		this.setCoordinates(object.x, object.y)
		this.setBearing(object.direction)
	}

	turnRight() {
		if (this.bearing === "north") {
			this.bearing = "east"
		}
		else if (this.bearing === "east") {
			this.bearing = "south"
		}
		else if (this.bearing === "south") {
			this.bearing = "west"
		}
		else
			this.bearing = "north"
	}

	turnLeft() {
		if (this.bearing === "north") {
			this.bearing = "west"
		}
		else if (this.bearing === "west") {
			this.bearing = "south"
		}
		else if (this.bearing === "south") {
			this.bearing = "east"
		}
		else
			this.bearing = "north"

	}

	advance() {
		if (this.bearing === "north") {
			this.coordinates[1]++
		}
		else if (this.bearing === "south") {
			this.coordinates[1]--
		}
		else if (this.bearing === "east") {
			this.coordinates[0]++
		}
		else if (this.bearing == "west")
			this.coordinates[0]--
	}

	translateInstructions(instructions) {
		for (let i = 0; i < instructions.length; i++) {
			if (instructions.charAt(i) === "L") {
				this.turnLeft()
			} else if (instructions.charAt(i) === "R") {
				this.turnRight()
			} else {
				this.advance()
			}
		}

	}
}
