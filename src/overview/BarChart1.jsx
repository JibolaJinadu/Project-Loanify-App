import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import './Overview-resp.css'

const data = [
  {
    name: 'Jan',
    uv: 30,
    pv: 51,
  },
  {
    name: 'Feb',
    uv: 70,
    pv: 80,
  },
  {
    name: 'Mar',
    uv: 69,
    pv: 55,
  },
];

export default function Barchart1() {
  return (
    <div className="linechart-container">
      <div className="linechart-header">Approved vs Declined</div>
      <div className="linechart-div">
        <BarChart
          width={320}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -20,
          }}
          className="chart-main"
        >
          <CartesianGrid strokeDasharray="3 0" />
          {<XAxis dataKey="name" style={{ fontSize: '10px' }} />}
          <YAxis domain={[0, 100]} style={{ fontSize: '10px' }} />
          <Bar dataKey="pv" fill="#00d43d" barSize={25} />
          <Bar dataKey="uv" fill="#d61650" barSize={25} />
        </BarChart>
      </div>
    </div>
  );
}
