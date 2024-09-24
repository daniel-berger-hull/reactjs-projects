


import { useState } from "react";

import TopBanner from './Components/TopBanner.js'
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import SequencePanel from './Components/Sequence/SequencePanel.js'
import StatsPanel from './Components/Statistics/StatsPanel.js';
import AlgorithmPanel from './Components/Algorithm/AlgorithmPanel.js';


import './App.css';






function PageTitle(){
  return ( <div><h1>Sequence Generation</h1></div>);

}




function App() {

  const _model = {
    sequenceLen : 5,
    sum: 10,
    sequenceArray: [1,2,3],
    hasError: false,
    errorMessage: ''
  };

  const [model, setModel] = useState(_model);

  function solveSequence(){
    console.log(`solveSequence:  Lenght: ${model.sequenceLen}, Sum: ${model.sum}, Array: ${model.sequenceArray}`);
  }


  return (   
    <div className="App" >
        <TopBanner />
        <NavBar/>
        <PageTitle />
        <div className='main-section'>
          <SequencePanel />
          <StatsPanel />
          <AlgorithmPanel solveSequenceButtonHandler={solveSequence}/>
        </div>
        <Footer />
      </div>

  );
 // }
}

export default App;
