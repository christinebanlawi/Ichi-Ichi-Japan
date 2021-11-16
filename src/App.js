import './App.css';
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Teacher from './components/Teacher'

import AboutUsImage from './images/about-us-image.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs image={AboutUsImage}/>
      <Teacher />
    </div>
  );
}

export default App;
