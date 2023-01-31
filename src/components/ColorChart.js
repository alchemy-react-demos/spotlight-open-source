import { useState } from 'react';
import { XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 5000 },
  { name: 'Page B', uv: 300, pv: 1200, amt: 7000 },
  { name: 'Page C', uv: 600, pv: 2400, amt: 8400 },
];
export default function ColorChart() {
  const [dataKey, setDataKey] = useState('pv');
  return (
    <>
      <select value={dataKey} onChange={(e) => setDataKey(e.target.value)}>
        <option value="uv">uv</option>
        <option value="pv">pv</option>
        <option value="amt">amt</option>
      </select>
      <BarChart width={600} height={400} data={data}>
        <Bar dataKey={dataKey} fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </>
  );
}
