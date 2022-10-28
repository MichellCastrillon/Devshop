import { NavBar } from '../components/NavBar.js';
import { Home } from '../components/Home.js';
import { Footer } from '../components/Footer.js';
import '../style/App/App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
