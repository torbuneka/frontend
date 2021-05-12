import './App.css';
import TakeDataTask from './Components/Tasks.jsx';
import CreateTask from './Components/CreateTask.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateTask />
        <TakeDataTask address="http://185.246.66.84:3000/etorbunova/tasks" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
