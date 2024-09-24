import { useState, useEffect } from 'react'

import restAPILogo from './assets/RestAPI.png'
import viteLogo from '/vite.svg'

import './App.css'



function App() {
  //const [count, setCount] = useState(0);
  const [firstName, setfirstName] = useState('Jocelyne');
  const [lastName, setlastName] = useState('Bedard');
  


  useEffect( () => {
      console.log('useEffect');

       // declare the async data fetching function
      const fetchData = async () => {
          // get the data from the api
          const data = await fetch(`http://localhost:4000/clients`);
          // convert the data to json
          const json = await data.json();
          console.log(json);
        
          setfirstName(json.first_name);
          setlastName(json.last_name);
      }

    fetchData()


    }, [firstName,lastName]
  );

  const buttonHandler = () => {
      console.log("button clicked!");
     // setName('New value')
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={restAPILogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ReactJS Rest API Call</h1>
      <div className="card">
        <button onClick={buttonHandler}>Change</button>
      </div>

      <div id="api-call-result-section"  className="card">
        <span>{`Client Name: ${firstName} ${lastName}`}</span>
      </div>


      <div id="blur-container">
        <div id="blur-element">  
        </div>
        <svg id="test-logo" width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="#ffcb23" />
         </svg>

       



       
      </div>

     
    </>
  )
}

export default App
