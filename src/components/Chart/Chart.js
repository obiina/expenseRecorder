import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar';
const Chart = (props) => {
const datapointValue = props.dataPoints.map(datapoint => datapoint.value);
const totalMaxNum = Math.max(...datapointValue);

return (
    <div className="chart">
       {props.dataPoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaxNum} label={datapoint.label}></ChartBar>)}
    </div>
);
}


export default Chart;