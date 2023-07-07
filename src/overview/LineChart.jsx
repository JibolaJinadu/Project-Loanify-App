import './Overview.css'
import './Overview-resp.css'
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "",
    uv: 77,
    pv: 30,
    amt: 65
  },
  {
    name: "1/10",
    uv: 95,
    pv: 12,
    amt: 60
  },
  {
    name: "3/10",
    uv: 50,
    pv: 25,
    amt: 30
  },
  {
    name: "5/10",
    uv: 30,
    pv: 3,
    amt: 40
  },
  {
    name: "",
    uv: 50,
    pv: 15,
    amt: 20
  },
];
export default function Line_Chart() {
  return (
    <div className="linechart-container">
      <div className="linechart-header">Completed vs Defaulted</div>
      <div className='linechart-div'>
        <LineChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          className='chart-main'
        >
          <CartesianGrid strokeDasharray="2 0" />
          <XAxis dataKey="name" style={{ fontSize: "10px" }} />
          <YAxis style={{ fontSize: "10px" }} />
          <Line type="linear" dataKey="pv" stroke="#335197" dot={false} />
          <Line type="linear" dataKey="uv" stroke="#d61650" dot={false} />
        </LineChart>
      </div>
    </div>
  );
}