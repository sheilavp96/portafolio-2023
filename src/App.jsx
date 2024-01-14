import { About } from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Proyectos from "./components/projects/Proyectos";
import SocialMedia from "./components/social/SocialMedia";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Proyectos />
      <SocialMedia />
    </>
  );
}

export default App;
