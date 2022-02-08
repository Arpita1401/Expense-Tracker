import { useState } from "react";
import ExpenseDetails from "./components/ExpenseDetails";
import NewExpense from "./components/userExpense/NewExpense";
const dummy_expenses = [
  {
    id: "i1",
    title: "Car Insurance",
    amount: 245,
    date: new Date(2022, 7, 14),
  },
  { id: "i2", title: "Food", amount: 341, date: new Date(2021, 6, 15) },
  {
    id: "i3",
    title: "House Rent",
    amount: 2834,
    date: new Date(2022, 8, 18),
  },
  { id: "i4", title: "Clothes", amount: 638, date: new Date(2020, 9, 20) },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onSubmitExpenseData={addExpenseHandler} />
      {/* so, first letter is name capital because react renders that 
      small letter starting is html components and capital letter is
      custom components */}
      <ExpenseDetails expense={expenses}></ExpenseDetails>
    </div>
  );
}

export default App;
