class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0];
    this.bearing = "north";
  }

  setCoordinates(x, y){
    this.coordinates = [x, y];
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"];
    if(directions.includes(direction)){
      this.bearing = direction
    }else{
      throw "Invalid Robot Bearing";
    };
  }

  place(placeObj){
    let x = placeObj.x;
    let y = placeObj.y;
    let direction = placeObj.direction;
      this.setCoordinates(x, y);
      this.setBearing(direction);
  }

  turnRight(){
    switch(this.bearing){
      case "north":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "south":
        this.setBearing("west");
        break;
      case "west":
        this.setBearing("north");
        break;
    }
  }

  turnLeft(){
    switch(this.bearing){
      case "north":
        this.setBearing("west");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "south":
        this.setBearing("east");
        break;
      case "west":
        this.setBearing("south");
        break;
    }
  }

  advance(){
    switch(this.bearing){
      case "north":
        this.setCoordinates(this.coordinates[0], this.coordinates[1]+1);
        break;
      case "east":
      this.setCoordinates(this.coordinates[0]+1, this.coordinates[1]);
        break;
      case "south":
        this.setCoordinates(this.coordinates[0], this.coordinates[1]-1);
        break;
      case "west":
        this.setCoordinates(this.coordinates[0]-1, this.coordinates[1]);
        break;
    }
  }

  translateInstructions(letters){
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]

      switch(letter){
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
      }
    }
  }

}
