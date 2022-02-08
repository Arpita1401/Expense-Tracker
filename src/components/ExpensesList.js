import "./ExpensesList.css";
import Expenseitem from "./expenseitem";

function ExpensesList(props) {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found</h2>;

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
