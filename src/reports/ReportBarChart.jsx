import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const data = [
  {
    name: 'text',
    uv: 60,
    pv: 40,
  },
  {
    name: 'text',
    uv: 80,
    pv: 65,
  },
  {
    name: 'text',
    uv: 55,
    pv: 65,
  },
];
export default function ReportBarChart() {
  return (
    <div>
      <BarChart
        width={450}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 70,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#3969DC" />
        <Bar dataKey="uv" fill="#8FE56A" />
      </BarChart>
    </div>
  );
}
