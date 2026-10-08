"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartContainer } from "@/components/ui/chart";
import { chartConfig } from "@/features/analytics/configs/bar-chart.config";
import { chartData } from "@/features/analytics/mocks/bar-chart.mock";

export function AppBarChart() {
  return (
    <>
      <h1 className="font-md mb-6 text-lg">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-50 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
