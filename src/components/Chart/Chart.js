import "./Chart.css";
import Chartbar from "./Chartbar";
const Chart = (props) => {
  const expenseAmountArray = props.datapoints.map((e) => e.value);
  const maxExpenseValueofAllMonths = Math.max(...expenseAmountArray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          max={maxExpenseValueofAllMonths}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
