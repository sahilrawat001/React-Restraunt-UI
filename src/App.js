 import './App.css';
import Cards from './Components/Cards';
import Category from './Components/Category';
import Food from './Components/Food';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div  >
       <Navbar/>
       <Hero/>
       <Cards/>
       <Food/>
       <Category/>
       <Footer/>
    </div>
  );
}

export default App;
