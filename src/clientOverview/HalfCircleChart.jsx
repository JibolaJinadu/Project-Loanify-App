import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

const HalfCircleChart = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const data = [
    { name: 'Category 1', value: 60, score: '200', grade: 'Very Bad' },
    { name: 'Category 2', value: 60, score: '500', grade: 'Poor' },
    { name: 'Category 3', value: 80, score: '630', grade: 'Fair' },
    { name: 'Category 4', value: 60, score: '700', grade: 'Good' },
    { name: 'Category 5', value: 60, score: '900', grade: 'Excellent' },
  ];

  const colors = ['red', 'orange', 'yellow', 'lightGreen', 'green'];

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(3);
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;
    const activeData = data[activeIndex];

    return (
      <g>
        <path
          d={`M${cx + innerRadius * Math.cos((startAngle + endAngle) / 2)} ${
            cy + innerRadius * Math.sin((startAngle + endAngle) / 2)
          } L${cx + outerRadius * Math.cos((startAngle + endAngle) / 2)} ${
            cy + outerRadius * Math.sin((startAngle + endAngle) / 2)
          } Z`}
          fill={fill}
        />
        <text
          x={cx}
          y={cy - 10}
          dy={4}
          textAnchor="middle"
          fill="grey"
          fontSize={40}
          fontWeight={800}
        >
          {activeData ? activeData.score : data[3].score}
        </text>
        <text
          x={cx}
          y={cy + 10}
          dy={8}
          textAnchor="middle"
          fill="black"
          fontSize={16}
          fontWeight={1500}
        >
          {activeData ? activeData.grade : data[3].grade}
        </text>

        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width={600} height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="10%"
          cy="50%"
          innerRadius="60%"
          outerRadius="70%"
          paddingAngle={2}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default HalfCircleChart;

/*import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const HalfCircleChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: 'Category 1', value: 30, info1: 'Text 1', info2: 'Text 2' },
    { name: 'Category 2', value: 40, info1: 'Text 3', info2: 'Text 4' },
    { name: 'Category 3', value: 30, info1: 'Text 5', info2: 'Text 6' },
  ];

  const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    const activeData = data[activeIndex];

    return (
      <g>
        <path
          d={`M${cx + innerRadius * Math.cos((startAngle + endAngle) / 2)} ${cy + innerRadius * Math.sin((startAngle + endAngle) / 2)} L${cx + outerRadius * Math.cos((startAngle + endAngle) / 2)} ${cy + outerRadius * Math.sin((startAngle + endAngle) / 2)} Z`}
          fill={fill}
        />
        <text
          x={cx}
          y={cy - 10}
          dy={8}
          textAnchor="middle"
          fill="grey"
          fontSize={14}
        >
          {activeData ? activeData.info1 : data[0].info1}
        </text>
        <text
          x={cx}
          y={cy + 10}
          dy={8}
          textAnchor="middle"
          fill="black"
          fontSize={14}
        >
          {activeData ? activeData.info2 : data[0].info2}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="70%"
          paddingAngle={2}
          isAnimationActive={false}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
          <Label
            value="Half Circle Chart"
            position="center"
            content={<text x="50%" y="50%" textAnchor="middle" dy={8}></text>}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default HalfCircleChart
*/
