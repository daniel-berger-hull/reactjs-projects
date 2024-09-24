import React, { Component } from 'react';

import MainPanel from '../MainPanel.js';
import SequenceParam from './SequenceParam.js';

import { validateSequenceParams , generate } from '../SequenceGenerator.js';



import '../GeneralStyle.css';

import './SequencePanel.css';


const ESCAPE_KEY = 27;


function SequenceDiplay(props){
   
    const mystyle = {
        display: "flex",
        flexDirection: "row",
        color: "#f67201",
        fontWeight: "bold",
        padding: "10px",
        fontFamily: "Arial",
        textShadow: "1px 1px 1px black"
      };


      let result = props.sequence.map( (element,id) => { return <span key={id}>{element}   </span> }); 

      result = <div>{result}</div>; 


    return (
        <div style={mystyle}>
            { result }
        </div>
    );
}

class SequencePanel extends Component {

    state = {
        sequenceLen : 5,
        sum: 10,
        sequenceArray: [1,2,3],
        hasError: false,
        errorMessage: ''
    };
    

    componentDidMount() {
        console.log('componentDidMount');
        document.addEventListener("keydown", this.handleKeyPress);
    }
 
    generateSequenceButtonHandler = () => {
        console.log("Clicked!");

        const result = validateSequenceParams( this.state.sequenceLen, this.state.sum );

        //Regardless if the validation pass or failed, those 2 states has to be updated to reflect what is going on...
        this.setState({hasError: !result.isValid,
                       errorMessage: result.errorMessage
        });

        if (result.isValid) {

            const nextSequence =  generate(this.state.sequenceLen, this.state.sum);
            this.setState({ sequenceArray: nextSequence});
        }


    };

    generateClearButtonHandler = () => {
       
        this.setState({
                sequenceLen : 5,
                sum: 2,
                hasError: false,
                errorMessage: '',
                sequenceArray: []

        });

        console.log("Clear Clicked!");
    };



    changeLenghtValueHandler = (event) => {
        this.setState( {sequenceLen: event.target.value});
    }

    changeSumValueHandler = (event) => {
        this.setState( {sum: event.target.value});
    }
 

    handleKeyPress  = (event) => {
        if (event.keyCode === ESCAPE_KEY) {
          console.log("The key is " + event.key);
          this.setState({ hasError: false,  errorMessage: ''});
        }
      }

    
    render() {

        let errorLabelStyle;
        
        if (this.state.hasError)
            errorLabelStyle = "sequence-panel-error-text show-error-text";
        else
            errorLabelStyle = "sequence-panel-error-text mask-error-text";


        return (
            <MainPanel title="Sequence Params"> 
           
                <SequenceParam  sequenceLen={this.state.sequenceLen}
                                sequencesum={this.state.sum} 
                                changeLenghtValueHandler={this.changeLenghtValueHandler}
                                changeSumValueHandler={this.changeSumValueHandler}
                />


                <SequenceDiplay sequence={this.state.sequenceArray} />


                <div id="buttons-section">
                    <div id="generate-button"><button className='action-button'  onClick={this.generateSequenceButtonHandler}>Generate</button></div>
                    <div id="clear-button"><button className='action-button'  onClick={this.generateClearButtonHandler}>Clear</button></div>
                </div>

                <div id="sequence-error-lbl" className={errorLabelStyle}>{this.state.errorMessage}</div>

            </MainPanel>
        );
    }
}

export default SequencePanel;