import './App.css';
import { FinalProject } from './PageComponents/main';

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
