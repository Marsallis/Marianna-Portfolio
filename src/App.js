import './App.css';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import Meet from './components/Meet';
import PicVid from './components/PicVid';
import Pics from './components/PicGallery';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <Meet />
        <PicVid />
        <Pics />
    </div>
  );
}

export default App;
