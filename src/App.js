import logo from './logo.svg';
import './App.css';

function App() {
  const userAgent = navigator.appCodeName;
  return (
    <div className="App">
      <header className="App-header">
        <h1>NATHAN GONZALEZ</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Le site est en cours de développement.</p>
        
      </header>
    </div>
  );
}

export default App;
