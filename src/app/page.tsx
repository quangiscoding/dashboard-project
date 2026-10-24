import { AppAreaChart, AppBarChart } from "@/features/analytics";
import { AppPieChart } from "@/features/analytics";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
    </div>
  );
}
