import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/index'
import {HomeAdmin} from '../HomeAdmin/index'

function App() {
  return (
    <div className="App">
      <HomeAdmin/>
    </div>
  );
}

export default App;
