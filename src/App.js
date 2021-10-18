import "./App.css";

import FilmsSlider from "./components/FilmsSlider";
import styles from './App.style'

function App() {
  return (
    <>
     
      <h1 style={styles.header} className="logo">
        Star wars films
      </h1>
      <FilmsSlider />
    </>
  );
}

export default App;
