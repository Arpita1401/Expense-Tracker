// you can add any function name, but the convention is to
// use same name as the file name
//but first letter, make it capital, it would be helpful even if not mandatory

//Always only one component is returned. therefore we cannot have multiple divs,
//rather we have to wrap everything in one div

// import { useState } from "react";
import "./expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function Expenseitem(props) {
  // const [titleOfExpense, setTitleOfExpense] = useState(props.title);
  // const clickHandler = () => {
  //   setTitleOfExpense("Updated");
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
}

export default Expenseitem;
