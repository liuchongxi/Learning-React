import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Utils/Card/Card";

function ExpenseItem(props) {
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  const expenseAmount = props.amount;

  const ChangeTitleHandler = () => {
    console.log("clicked.");
    setExpenseTitle("new title after clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        <button onClick={ChangeTitleHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
