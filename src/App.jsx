import "./App.css";
import { Scene } from "./components/Scene";

function App() {
  return (
    <>
      <div className="info-overlay">
        <h1>WebGL Shader Demo</h1>
        <p>Click anywhere to change colors</p>
        <p>Drag to rotate the view</p>
      </div>
      <Scene />
    </>
  );
}

export default App;
