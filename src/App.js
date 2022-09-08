import './App.css';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import Meet from './components/Meet';
import PicVid from './components/PicVid';
import Pics from './components/PicGallery';
import Prices from './components/Prices';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <Meet />
        <PicVid />
        <Pics />
        <Prices />
    </div>
  );
}

export default App;
