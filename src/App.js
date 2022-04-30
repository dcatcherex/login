import "./App.css";
// import logo from "./Assets/Logos/logo-dark.svg";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
