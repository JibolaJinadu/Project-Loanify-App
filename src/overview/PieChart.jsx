import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#3969dc', 'rgb(243,181,22)', '#00d43d', '#dc3969'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart({
  approve,
  close,
  pending,
  defaulted,
  percentages,
}) {
  const data = [
    { name: 'Group A', value: close },
    { name: 'Group B', value: pending },
    { name: 'Group C', value: approve },
    { name: 'Group D', value: defaulted },
  ];
  return (
    <PieChart width={330} height={340}>
      <Pie
        data={data}
        cx={170}
        cy={180}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={140}
        // fill="#8884d8"
        fill="red"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <div className="label-percentage">{`${(percentages[0] * 100).toFixed(
        0
      )}%`}</div>
      <div className="label-percentage">{`${(percentages[1] * 100).toFixed(
        0
      )}%`}</div>
      <div className="label-percentage">{`${(percentages[2] * 100).toFixed(
        0
      )}%`}</div>
      <div className="label-percentage">{`${(percentages[3] * 100).toFixed(
        0
      )}%`}</div>
    </PieChart>
  );
}
