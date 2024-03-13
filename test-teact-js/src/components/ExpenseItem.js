
import './ExpenseItem.css';



const getRandomPrice = (max)  => {
    return Math.floor(Math.random() * max);
}


export default function ExpenseItem() {
    return (<div className='expense-item'>
                <div>March 28</div>
                <div>Car insurance</div>
                <div>{ getRandomPrice(10) }</div>
          </div>);
}