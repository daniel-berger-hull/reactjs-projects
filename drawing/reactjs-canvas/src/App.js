import React , { useEffect } from 'react';
import { Canvas } from './Canvas.jsx';

import { isValidNbrRows, isValidString, zigzagAlgo } from './algo.js';



import './App.css';


function HeaderSection ()  {
  return ( 
    <div id="header-section">
      <span>Zig-Zag Algo!!</span>
    </div>
  );

}


function InputSection ()  {


  useEffect( () =>  {
      document.getElementById("text-to-encrypt").value = 'abcdefghijklmnopqrstvwxyzabcdefghijklmnopqrstvwxyz';

    },   []  );


    function handleChange(event) {
      console.log(event.target.value);


      let stringLen = 0;
      const textToEncrypt = document.getElementById("text-to-encrypt").value;

      if (textToEncrypt === null )  stringLen = 0;
      else {

        document.getElementById("text-size").value =  textToEncrypt.length;
      }


    }
    



    return ( <div id="input-section">
               <div id="input-section-inner">
                  <div className="input-section-grid-item">Text to encrypt</div>
                  <div className="input-section-grid-item"><input type="text" id="text-to-encrypt" className="large-input" name="fname" onChange={handleChange}/> </div>

                  <div className="input-section-grid-item">Text Size</div>
                  <div className="input-section-grid-item"><input type="text" id="text-size" className="small-input" name="fname"  width="5" />  </div>                  
                  <div className="input-section-grid-item">Row Size</div>
                  <div className="input-section-grid-item"><input type="text" id="row-count" className="small-input" name="fname"  width="3" />  </div>                  
                </div>
          </div>);
  
  }
  

function CanvasSection ()  {
  return ( <div id="canvas-section">
            <Canvas width={500} height={500} />
        </div>);

}


function ButtonSection ()  {

    const testButtonHandler = () => {
          console.log('Test Button clicked');

          const textToEncrypt = document.getElementById("text-to-encrypt").value;
          const rowSize =  parseInt(document.getElementById("row-count").value);

          if ( !isValidString(textToEncrypt) ) {
            alert("The string is either empty or too short\nThe minium lenght is 10 characters");
            return;
           }

          if ( !isValidNbrRows(rowSize) ) {
              alert("The number of row is incorrect\nThe minum is 3 rows");
              return;
           }

          //zigzagAlgo(4,"Encrupt this message my friend!");
          const resultArray = zigzagAlgo(rowSize,textToEncrypt);
          console.log(resultArray); 
          
    }
    

    const resetButtonHandler = () => {
      console.log('reset Button clicked');

      document.getElementById("text-to-encrypt").value = '';
      document.getElementById("row-count").value = '';
    }


    return (<div id="button-section">
              <div className="button-container">
                  <div><button onClick={testButtonHandler}>Test</button></div>
                  <div><button onClick={resetButtonHandler}>Rest</button></div>
              </div>
            </div>);
}

function App() {

  
  return (
    <div   onLoad="myScript()"  className="App">
      <HeaderSection />
      <InputSection />
      <CanvasSection />
      <ButtonSection />
    
    </div>
  );
}

export default App;
