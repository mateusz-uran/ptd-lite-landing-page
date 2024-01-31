import "./App.css";
import Features from "./components/Features";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <HowItWorks />
      <Features />
    </>
  );
}

export default App;
