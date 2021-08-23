import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("cn", { month: "long" });
  const year = expenseDate.toLocaleString("cn", { day: "2-digit" });
  const day = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
