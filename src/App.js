import './App.css';
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Teacher from './components/Teacher'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AboutUsImage from './images/about-us-image.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs image={AboutUsImage}/>
      <Teacher />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
