import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Aug. 21th 2021</div>
      <div className="expense-item__description">
        <h2>Food</h2>
        <div className="expense-item__price">$25</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
