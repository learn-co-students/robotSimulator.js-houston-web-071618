class Robot {
	//your solution here
  constructor(){
    this.coordinates =[0,0]
    this.bearing = "north"
  }

  setCoordinates(x, y){
    this.coordinates = [x,y];
  }


  setBearing(direction){
    const compass = ["north", "east", "south", "west"];
    // console.log(compass.includes("north"))
    if (compass.includes(direction)){
        this.bearing = direction;
    }
    else{
      throw("Invalid Robot Bearing");
    }
  }

  place({x, y, direction}){
    this.setCoordinates(x,y);
    this.setBearing(direction);
  }

  turnRight(){
    switch (this.bearing) {
      case "north":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "south":
        this.setBearing("west");
        break;
      default:
        this.setBearing("north");
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "south":
        this.setBearing("east");
        break;
      default:
        this.setBearing("south");
    }
  }

  advance(){
    let desiredX = this.coordinates[0];
    let desiredY = this.coordinates[1];
    switch (this.bearing) {
      case "north":
        this.setCoordinates(desiredX,(desiredY+1));
        break;
      case "east":
        this.setCoordinates((desiredX+1),desiredY);
        break;
      case "south":
        this.setCoordinates(desiredX,(desiredY-1))
        break;
      default:
        this.setCoordinates((desiredX-1),desiredY);
    }
  }

  translateInstructions(instructions){
    let instruction_array = [...instructions];
    instruction_array.forEach(instruction =>{
      switch (instruction) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
        default:
          return "not an instruction"
      }

    });
  }

}
