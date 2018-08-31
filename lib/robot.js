class Robot {
	//your solution here

	constructor() {
		this.coordinates = [0,0]
		this.bearing = 'north'
		this.directions = ['north', 'south', 'east', 'west']
	}

	setCoordinates(x,y) {
		this.coordinates = [x,y]
	}

	setBearing(direction) {
		if (this.directions.includes(direction)) {
			this.bearing = direction
		} else {
			throw new Error('Invalid Robot Bearing')
		}
	}

	place(objectPlace) {
		this.coordinates = [objectPlace.x, objectPlace.y]
		this.bearing = objectPlace.direction
	}

	turnRight() {
		if (this.bearing === 'north')
			this.bearing = 'east'
		else if (this.bearing === 'east')
			this.bearing = 'south'
		else if (this.bearing === 'south')
			this.bearing = 'west'
		else if (this.bearing === 'west')
			this.bearing = 'north'
	}

	turnLeft() {
		if (this.bearing === 'north')
			this.bearing = 'west'
		else if (this.bearing === 'west')
			this.bearing = 'south'
		else if (this.bearing === 'south')
			this.bearing = 'east'
		else if (this.bearing === 'east')
			this.bearing = 'north'
	}

	advance(objectPlace) {
		if (this.bearing === 'north')
			this.coordinates = [0, 1]
		else if (this.bearing === 'east')
			this.coordinates = [1,0]
		else if (this.bearing === 'south')
			this.coordinates = [0,-1]
		else if (this.bearing === 'west')
			this.coordinates = [-1,0]
	}

	translateInstructions(instructions) {
		
	}

}
