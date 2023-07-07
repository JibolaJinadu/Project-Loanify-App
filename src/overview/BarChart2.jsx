import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 51,
  },
  {
    name: 'Feb',
    pv: 28,
  },
  {
    name: 'Mar',
    pv: 80,
  },
  {
    name: 'Apr',
    pv: 65,
  },
  {
    name: 'May',
    pv: 25,
  },
  {
    name: 'Jun',
    pv: 40,
  },
];

export default function Barchart2() {
  return (
    <div className="linechart-container">
      <div className="linechart-header">New Loan Application</div>
      <div className="linechart-div">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -20,
          }}
          className="chart-main"
        >
          <CartesianGrid strokeDasharray="2 0" />
          {<XAxis dataKey="name" style={{ fontSize: '10px' }} />}
          <YAxis domain={[0, 100]} style={{ fontSize: '10px' }} />
          <Bar dataKey="pv" fill="#3969dc" barSize={20} />
        </BarChart>
      </div>
    </div>
  );
}
