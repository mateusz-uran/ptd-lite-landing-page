import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
