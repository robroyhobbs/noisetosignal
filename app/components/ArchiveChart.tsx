"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  week: string;
  ratio: number;
}

export function ArchiveChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" vertical={false} />
        <XAxis
          dataKey="week"
          tick={{ fill: "#666680", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#666680", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={40}
        />
        <Tooltip
          contentStyle={{ background: "#0d0d14", border: "1px solid #2a2a3a", borderRadius: 4, fontSize: 12 }}
          labelStyle={{ color: "#9999bb" }}
          itemStyle={{ color: "#ef4444" }}
          formatter={(v) => [typeof v === "number" ? v.toFixed(1) : v, "NSI"]}
        />
        <Line
          type="monotone"
          dataKey="ratio"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ fill: "#ef4444", r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
