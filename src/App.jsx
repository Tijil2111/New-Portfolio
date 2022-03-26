import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="scroll-smooth">
      <AnimatedCursor color="81, 70, 238" />
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
