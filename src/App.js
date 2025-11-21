import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import tapia from '../src/assets/images/tapiaBW.jpeg'
import About from './Components/AboutUs';
import Coaches from './Components/Coaches';
function App() {
  
  return (
    <div className='App' >
     <Header/>
     <Hero/> 
    <About/>
    <Coaches/>
    </div>
  );
}

export default App;
