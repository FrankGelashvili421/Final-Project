import {FinalProject} from './PageComponents/main';
import './App.css';

const handleDragStart = (event) => {
  event.preventDefault();
};

function App() {
  return (
    <div className="App no-drag" onDragStart={handleDragStart}>
        <FinalProject/>
    </div>
  );
}

export default App;
