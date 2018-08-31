class Robot {
	//your solution here


  constructor(){
    this.coordinates = [0,0];
    this.bearing = 'north';

  }//constructor
  setCoordinates(x,y){
    this.coordinates = [x,y];
  }//setCoordinates
  setBearing(dir){
    // let myDir = dir.toLowerCase();
    // console.log(arguments)
    if(['north','south','east','west'].includes(dir)){
      this.bearing = dir
    }else{
      throw new Error("Invalid Robot Bearing"); //COME BACK HERE
    }
  }//setBearing
  place(stuff){
    const {x,y,direction} = stuff;
    this.coordinates = [x,y];
    this.setBearing(direction);
  }//place
  turnRight(){
    switch(this.bearing)
    {
      case 'north':
      this.setBearing('east');
      break;
      case 'south':
      this.setBearing('west');
      break;
      case 'east':
      this.setBearing('south');
      break;
      case 'west':
      this.setBearing('north');
      break;
      default:
      "YOU FUCKED UP"
    }
  }//turnRight
  turnLeft(){
    switch(this.bearing)
    {
      case 'north':
      this.setBearing('west');
      break;
      case 'south':
      this.setBearing('east');
      break;
      case 'east':
      this.setBearing('north');
      break;
      case 'west':
      this.setBearing('south');
      break;
      default:
      "YOU FUCKED UP"
    }
  }//turnLeft
  advance(){
    console.log(this.coordinates);
    if([ "south", "north"].includes(this.bearing)){
      this.bearing == "south" ? this.coordinates[1] -= 1 : this.coordinates[1] += 1;
    }else{
      this.bearing == "east" ? this.coordinates[0] += 1 : this.coordinates[0] -= 1;
    }

  }//advance
  translateInstructions(cmdString){
    debugger
    let myCommands = cmdString.toLowerCase().split("");
    while(myCommands.length > 0)
    {

      let command = myCommands.shift()
      switch (command)
      {
        case 'l':
        this.turnLeft();
        break;
        case 'r':
        this.turnRight();
        break;
        case 'a':
        this.advance();
        break;
        default:
        console.log("you done f-ed up");
        break;
        //dafuq you doing?!
      }//command


    }//while
    //receive directions to do shit

  }//translateInstructions
}//Robot Class

//BULID MY ROBOTS HERE!!
