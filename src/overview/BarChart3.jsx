import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 65,
  },
  {
    name: 'Feb',
    pv: 35,
  },
  {
    name: 'Mar',
    pv: 48,
  },
  {
    name: 'Apr',
    pv: 77,
  },
  {
    name: 'May',
    pv: 35,
  },
  {
    name: 'Jun',
    pv: 8,
  },
];

export default function Barchart3() {
  return (
    <div className="linechart-container">
      <div className="linechart-header">Approved Loan Application</div>
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
          <CartesianGrid strokeDasharray="3 0" />
          {<XAxis dataKey="name" style={{ fontSize: '10px' }} />}
          <YAxis domain={[0, 100]} style={{ fontSize: '10px' }} />
          <Bar dataKey="pv" fill="#00d43d" barSize={20} />
        </BarChart>
      </div>
    </div>
  );
}
