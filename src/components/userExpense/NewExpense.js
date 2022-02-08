import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isFormEdit, setisFormEdit] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSubmitExpenseData(expenseData);
    setisFormEdit(false);
  };

  const startEditingHandler = () => {
    setisFormEdit(true);
  };
  const onCancelHandler = () => {
    setisFormEdit(false);
  };
  return (
    <div className="new-expense">
      {!isFormEdit && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isFormEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButton={onCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
