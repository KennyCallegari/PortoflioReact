import { useEffect } from 'react';
import animejs from 'animejs';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MyPP } from './components/MyPP';
import HomeScreen from './pages/HomeScreen';

function App() {
  useEffect(() => {
    animejs({
      targets: ".texts h2",
      translateY: [100, 0],
      easing: "easeOutExpo",
      opacity: [0, 1],
      duration: 2700,
    })
    animejs({
      targets: ".texts p",
      translateY: [48, 0],
      easing: "easeOutExpo",
      opacity: [0, 1],
      duration: 2700,
      delay: 400,
    })
  }, []);

  return (
    <Router>
      <HomeScreen />
      {/* <MyPP /> */}
    </Router>
  );
}

export default App;
