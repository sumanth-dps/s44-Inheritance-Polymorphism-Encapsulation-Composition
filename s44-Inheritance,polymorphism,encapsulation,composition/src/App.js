import "./App.css";
import Cat from "./classes/Cat";
import Cheetah from "./classes/Cheetah";

function App() {
  let meow = new Cat();
  meow.runningSpeed();
  meow.eatingBehavior();
  meow.facingHuman();

  let chirutha = new Cheetah();
  chirutha.noOfNose = 1;
  chirutha.runningSpeed();
  chirutha.eatingBehavior();
  chirutha.facingHuman();
  chirutha.calcMarks(1);
  return <div className="App"></div>;
}

export default App;
