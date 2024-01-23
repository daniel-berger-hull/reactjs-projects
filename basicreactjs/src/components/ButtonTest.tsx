import React from 'react';

import './ButtonTest.css';

import ButtonsForm from './buttonsForm/ButtonsForm';



class ButtonTest extends React.Component {
    render() {
            return (<div  className="button-test">
                        <ButtonsForm />
                    </div>
            );
    }
  }

  export default ButtonTest;
