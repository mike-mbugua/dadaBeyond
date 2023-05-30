import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./components/Homepage/HomePage";
import About from "./components/About/About";
import Mission from "./components/mission/Mission";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About />
      <Mission />
    </div>
  );
}

export default App;
