import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("cn", { month: "long" });
  const year = expenseDate.toLocaleString("cn", { day: "2-digit" });
  const day = expenseDate.getFullYear();

  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
