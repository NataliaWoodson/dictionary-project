import logo from "./logo.svg";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2 className="title">Dictionary</h2>
          <img src={logo} className="App-logo img-fluid" alt="logo" width="300" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className=".App-footer">
          <small>Coded by Natalia Woodson and open-sourced on <a href="https://github.com/NataliaWoodson/dictionary-project.git" target="_blank" rel="noreferrer">GitHub</a></small> 
        </footer>
      </div>
    </div>
  );
}

export default App;
