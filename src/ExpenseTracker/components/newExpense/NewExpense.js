import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../Utils/Card/Card";

function NewExpense() {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
}

export default NewExpense;
