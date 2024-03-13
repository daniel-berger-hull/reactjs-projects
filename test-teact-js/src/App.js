
import  ExpenseList  from './components/ExpenseList.js';



import logo from "./logo.svg";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <img id='logo'  src={logo} alt='logo image' />
        
        
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
