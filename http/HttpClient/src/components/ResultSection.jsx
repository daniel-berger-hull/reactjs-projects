
import { useState, useEffect } from 'react'
//
import './ResultSection.css';

function ResultSection(props) {


    const [loaded, setLoaded] = useState(false);
    
    useEffect( () => {
            console.log(`ResultSection::useEffect ${props.myparam}` );
            //setLoaded(true);
        }, [props.test]
    );
    

  
    
    return (
        <div>
            <span>The page is {props.myparam}</span>
            
        </div>
    );
}

export default ResultSection;