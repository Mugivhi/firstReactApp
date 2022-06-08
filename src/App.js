import logo from './logo.svg';
import './App.css';

import AddItem from './components/addItem';
import Leftisite from './components/leftisite';
import Rightsite from './components/rightsite';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className='holder'>
      <div className='arrow-left'>
        <FaAngleLeft />
      </div>
      <div className='arrow-right'>
        <FaAngleRight />
      </div>
      <div className='center-class'>
        <AddItem/>
      </div>
      <div className='right-class'>
        <Rightsite/>
      </div>
      <div className='left-class'>
        <Leftisite/>
      </div>
    </div>
    </div>
    
  );
}

export default App;
