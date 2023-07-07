import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Default', title: 'Disbursement', value: 300 },
  { name: 'Active', title: 'Disbursement', value: 900 },
  { name: 'Repayment', title: 'Disbursement', value: 300 },
];
const COLORS = ['#D30744', '#0744D3', '#44D307'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={-18} textAnchor="middle">
        <tspan style={{ fontSize: '14px', fontWeight: '700', fill: '#999CA0' }}>
          {payload.name}
        </tspan>
        <tspan
          x={cx}
          y={cy}
          dy={4}
          style={{ fontSize: '14px', fontWeight: '700', fill: '#999CA0' }}
        >
          {payload.title}
        </tspan>
        <tspan
          x={cx}
          y={cy}
          dy={35}
          style={{ fontSize: '20px', fontWeight: '500' }}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={50}
      />
    </g>
  );
};

const ReportPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const onMouseEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="">
      <ResponsiveContainer width={160} height={200}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={onMouseEnter}
            cornerRadius={50}
            paddingAngle={-10}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportPieChart;
