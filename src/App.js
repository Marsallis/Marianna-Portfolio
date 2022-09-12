import './App.css';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import Meet from './components/Meet';
import PicVid from './components/PicVid';
import Pics from './components/PicGallery';
import Prices from './components/Prices';
import ContactUs from './components/Contact.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <Meet />
        <PicVid />
        <Pics />
        <Prices />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
