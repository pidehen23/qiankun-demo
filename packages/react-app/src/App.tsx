import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
