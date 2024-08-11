import Cat from "./Cat";

class Cheetah extends Cat {
  constructor() {
    super();
    console.log("Inside Cheetah Constructor");
  }
  runningSpeed = () => {
    console.log("Cheetah runs 125kmph.");
  };
  eatingBehavior = () => {
    console.log("Cheetah hunts deers and eat  pure non-vegetarian.");
  };
  facingHuman = () => {
    console.log(
      "Cheetah will try to attack on Human, and Human try to escape."
    );
  };
  calcMarks = () => {
    console.log("No parameters");
  };
  calcMarks = (a) => {
    console.log("One parameters");
  };
  calcMarks = (a, b) => {
    console.log("Two parameters");
  };
  calcMarks = (a, b, c) => {
    console.log("Three parameters");
  };
}
export default Cheetah;
