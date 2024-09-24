
const MAX_SEQUENCE_LENGHT = 100;
const MAX_SEQUENCE_SUM    =  50;



const validateSequenceParams = (sequenceLenght, sequenceSum) => {

    let result = {
        isValid: true,
        errorMessage:''
    };

    if (sequenceLenght < 2 || sequenceLenght > MAX_SEQUENCE_LENGHT) {
        result.isValid = false;
        result.errorMessage = `The lenght of the sequence has to be greater or equal to 2 numbers and less than ${MAX_SEQUENCE_LENGHT} numbers`;
    }
    
    if (sequenceSum < 2 || sequenceSum > MAX_SEQUENCE_SUM) {
        result.isValid = false;
        result.errorMessage = `The sum of the sequence has to be greater or equal to 2 numbers and less than ${MAX_SEQUENCE_SUM} numbers`;
    }
    

    return result;
};


const analyseSequence = (sequence) => {
    if (sequence === undefined || sequence.length < 2) {
        return "Sequence is invalid! (Either null or smaller than 2 items)";
    }

    let distribution = Array(11).fill(0)

    

    sequence.forEach(element => {
        const index = element + 1;
        distribution[index] =  distribution[index] + 1;
    });

    return distribution;
}




const generate = (sequenceLenght, sequenceSum) => {

    //let sequence = [2,7,11,15];

    let sequence = [];


    let analysis = {
        baseTen : [],
        baseHundred: [],
        baseHunderedTen: []
    };

    for (let i=0;i < sequenceLenght; i++) {
        const nextNumber =  (Math.floor(Math.random() * 10000) % 10)+ 1;
        
        sequence.push( nextNumber  );
    }
    

    /*
    for (let i=0;i < 10; i++) {
        //const nextNumber = Math.floor(Math.random() * 10) + 1;
        const rawRandom = Math.random(); 
        const roundTen =  Math.floor(rawRandom * 10) + 1;
        const roundHunded =  (Math.floor(rawRandom * 100) % 10)+ 1;
        const roundHunderedTen =  (Math.floor(rawRandom * 10000) % 10)+ 1;
        
        
        console.log( (i+1) + " -> " + rawRandom + " , " + roundTen + " , " + roundHunded + " , " + roundHunderedTen);        

        analysis.baseTen.push(roundTen);
        analysis.baseHundred.push(roundHunded);
        analysis.baseHunderedTen.push(roundHunderedTen);

    }

    const allSequence =  Object.values(analysis);
    
    allSequence.forEach(nextSequence => {
        const result =  analyseSequence(nextSequence);
   
        result.forEach( (element, id) => { console.log(id+1 + " = " + element)});
   });
    
    
//    const result =  analyseSequence(analysis.baseTen);
   
//     result.forEach( (element, id) => { console.log(id+1 + " = " + element)});
*/

    return sequence;
}

export { validateSequenceParams , generate };