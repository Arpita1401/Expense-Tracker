import { useState } from "react";
import "./ExpenseDetails.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseDetails(props) {
  const [originalYear, setSelectedYear] = useState("2020");
  const yearFilterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredMap = props.expense.filter((exp) => {
    return exp.date.getFullYear().toString() === originalYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterExpenseYear={yearFilterChangeHandler}
        defaultYear={originalYear}
      ></ExpenseFilter>

      <ExpensesChart expenses={filteredMap}></ExpensesChart>

      {/* Method 1 to show conditional content */}
      {/* {filteredMap.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredMap.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* Method 2 to show conditional content */}
      {/* In javascript, if we join two expressions by and, where first exp is condition
      and second is the value to be outputted, then if
      first condition is true then second condition outputs, example is
      right below */}
      {/* 
      {filteredMap.length === 0 && <p>No expenses found</p>}
      {filteredMap.length > 0 &&
        filteredMap.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}  */}

      {/* Method 3 to show conditional content */}
      <ExpensesList expenses={filteredMap} />
    </Card>
  );
}
export default ExpenseDetails;
