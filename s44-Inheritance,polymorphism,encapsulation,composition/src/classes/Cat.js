class Cat {
  constructor() {
    console.log("Inside cat constructor");
    this.noOfLegs = 4;
    this.noOfEars = 2;
    this.noOfNose = 1;
  }
  eatingBehavior = () => {
    console.log("Cat hunts rats and drinks milk.");
  };
  sleepingBehaviour = () => {
    console.log("Cat sleeps on terraces of houses.");
  };
  runningSpeed = () => {
    console.log("Cat runs 25kmph");
  };
  facingHuman = () => {
    console.log("Cat runs away from human");
  };
}

export default Cat;
