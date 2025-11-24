import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import tapia from '../src/assets/images/tapiaBW.jpeg'
import About from './Components/AboutUs';
import Coaches from './Components/Coaches';
import CurvedLoop from './ReactBits/CurvedLoop/CurvedLoop';
function App() {
  
  return (
    <div className='App' >
     <Header/>
     <Hero/> 
    <About/>
<CurvedLoop 
  marqueeText="Play | Train | Improve | Compete | UNLEASH THE BEAST "
  speed={1}
  curveAmount={500}
  direction="left"
  interactive={true}
  className="css"
/>
    <Coaches/>

    </div>
  );
}

export default App;
