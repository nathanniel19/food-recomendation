import "./App.css";
import NavbarTitle from "./components/NavbarTitle";
import CountryOption from "./components/CountryOption";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <NavbarTitle />
      <Description />
      <CountryOption />
    </div>
  );
}

export default App;
