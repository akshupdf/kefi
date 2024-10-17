
import './App.css';
import Category from './components/Category';
import Fish from './components/Fish';
import Food from './components/Food';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
<Home />
<Food />
<Fish />
<Footer />
    </div>
  );
}

export default App;
