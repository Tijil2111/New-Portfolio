import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { About } from "./components/About";

function App() {
  return (
    <div className="scroll-smooth">
      <AnimatedCursor color="81, 70, 238" />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
