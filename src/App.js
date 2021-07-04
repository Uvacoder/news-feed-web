import logo from "./logo.svg";
import "./App.css";
import MainFeed from "./components/MainFeed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>News Feed</h1>
        <MainFeed />
      </header>
    </div>
  );
}

export default App;
