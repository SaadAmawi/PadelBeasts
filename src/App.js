import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import tapia from '../src/assets/images/tapiaBW.jpeg'
import About from './Components/AboutUs';
import Coaches from './Components/Coaches';
import CurvedLoop from './ReactBits/CurvedLoop/CurvedLoop';
import Footer from './Components/Footer';
import Newsletter from './Components/NewsLetter';
import GradualBlurMemo from './ReactBits/Gradual Blue/GradualBlur';
import GradualBlur from './ReactBits/Gradual Blue/GradualBlur'
import Info from './Components/info';
import FlowingMenu from './ReactBits/Flowing Menu/FlowingMenu';
import demoItems from './utils'
import LogoLoop from './ReactBits/LogoLoop/LogoLoop';
function App() {
  
  return (
    <div className='App' >
     <Header/>
     <Hero/> 
    <About/>
    <GradualBlur/>
      <CurvedLoop 
        marqueeText="Play | Train | Improve | Compete | UNLEASH THE BEAST "
        speed={1}
        curveAmount={500}
        direction="left"
        interactive={true}
        className="css"
      />
      
    <Coaches/>
    <LogoLoop 
    logos={demoItems}
        speed={120}
        direction="right"
        logoHeight={78}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#141414"
        />
    <Newsletter/>
    <Footer/>
    
    </div>
  );
}

export default App;
