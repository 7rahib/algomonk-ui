import { Route, Routes } from 'react-router-dom';
import './App.css';
import Documentation from './Components/Documentation/Documentation';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/documentation' element={<Documentation></Documentation>}></Route>
      </Routes>
    </div>
  );
}

export default App;
