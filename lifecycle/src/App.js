import  { useEffect } from 'react';


import './App.css';

function App() {


  useEffect( () => {
      console.log('useEffect');
    } , []
 );


  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
