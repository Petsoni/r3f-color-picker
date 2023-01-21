import "./index.scss"
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
import MainPage from "./components/main-page/main-page";

function App() {
  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
