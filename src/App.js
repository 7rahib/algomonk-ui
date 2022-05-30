import { Route, Routes } from 'react-router-dom';
import './App.css';
import MergeSort from './Components/Documentation/Algorithms/Sorting/MergeSort';
import Documentation from './Components/Documentation/Documentation';
import Home from './Components/Home/Home';
import Maze from './Components/Maze/Maze';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/documentation' element={<Documentation></Documentation>}></Route>
        <Route path='/maze' element={<Maze></Maze>}></Route>
        <Route path='/mergeSortDoc' element={<MergeSort></MergeSort>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
