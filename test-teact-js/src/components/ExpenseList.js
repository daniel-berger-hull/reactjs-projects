import React from 'react';

import ExpenseItem from './ExpenseItem.js';


class ExpenseList extends React.Component {
    state = {  } 
    render() { 
        return (<div>
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />


        </div>);
    }
}
 
export default ExpenseList;