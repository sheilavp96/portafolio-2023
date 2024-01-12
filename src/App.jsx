import { About } from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
