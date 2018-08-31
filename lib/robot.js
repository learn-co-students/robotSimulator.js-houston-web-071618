class Robot {
	constructor(bearing = 'north') {
		this.coordinates = [0, 0];
		this.bearing = bearing;
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
			return 'Invalid Robot Bearing';
		}
	}
