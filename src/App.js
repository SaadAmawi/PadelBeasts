import logo from './logo.svg';
import './App.css';
import GlassSurface from './ReactBits/GlassSurface/GlassSurface';
import ModelViewer from './ReactBits/ModelViewer/ModelViewer';

function App() {
  return (
    <div >
     <GlassSurface
       
  borderRadius={24}
      className='glass'>
      
     </GlassSurface>
     
    <ModelViewer
  url="./padel_court_or_paddle_court.glb"
  width={400}
  height={400}
/>
    </div>
  );
}

export default App;
