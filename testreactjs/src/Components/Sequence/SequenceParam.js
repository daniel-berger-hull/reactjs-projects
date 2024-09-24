import './SequenceParam.css';



function SequenceParam(props) {
    
    return ( 
      <div className="sequence-param">
        
        <div id="sequence-len-lbl" className="MainPanel-bold-text">Lenght</div>
        <div id="sequence-len-input"> 
            <input type="text" className='textfield-input'  value={props.sequenceLen} onChange={ props.changeLenghtValueHandler } ></input>
         </div>
         <div id="sequence-sum-lbl" className="MainPanel-bold-text">Sum</div>
         <div id="sequence-sum-input"> 
                    <input type="text" className='textfield-input' value={props.sequencesum}     onChange={ props.changeSumValueHandler }></input>
          </div>

    </div> );
}

export default SequenceParam;