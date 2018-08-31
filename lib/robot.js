class Robot {
	
	constructor() {
		this.coordinates = [0,0]
		this.bearing = 'north'
		this.directions = ["north", "south", "east", "west"]
	}

	setCoordinates(x,y) {
		this.coordinates = [x,y]
	}

	setBearing(direction) {
			if (this.directions.includes(direction)) {
				this.bearing = direction;
			} else {
				throw new Error("Invalid Robot Bearing");
		}
	}

	place(go) {
		this.coordinates = [go.x, go.y]
		this.bearing =  go.direction
	}

	turnRight() {
		if (this.bearing === "north")
				this.bearing = 'east'
		else if (this.bearing === "east")
				this.bearing = 'south'
		else if (this.bearing === "south")
			this.bearing = 'west'
		else if (this.bearing === "west")
			this.bearing = 'north'
	}

	turnLeft() {
		if (this.bearing === "north")
			this.bearing = 'west'
		else if (this.bearing === "west")
			this.bearing = 'south'
		else if (this.bearing === "south")
			this.bearing = 'east'
		else if (this.bearing === "east")
			this.bearing = 'north'
	}

	advance() {
		if (this.bearing === "north")
			this.coordinates = [this.coordinates[0],++this.coordinates[1]]
		else if (this.bearing === "east")
			++this.coordinates[0],this.coordinates[1]
		else if (this.bearing === "south")
			this.coordinates[0],--this.coordinates[1]
		else if (this.bearing === "west")
			--this.coordinates[0],this.coordinates[1]
	}

	translateInstructions(instructions) { 
		let newArray = instructions.split("")
			newArray.forEach(instruction => {
				if (instruction === 'L') {
					this.turnLeft()
				}
				else if (instruction === 'R') {
					this.turnRight()
				}
				else if (instruction === 'A') {
					this.advance()
				}
			})
		}
	}
