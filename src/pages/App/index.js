import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeUser } from '../HomeUser/index'
import {HomeAdmin} from '../HomeAdmin/index'

function App() {
  return (
    <div className="App">
      <HomeUser/>
    </div>
  );
}

export default App;
