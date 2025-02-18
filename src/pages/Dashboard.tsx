
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, List } from "lucide-react";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: any;
}) => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="page-container space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back to your Japanese learning journey
          </p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard
          title="Total Words"
          value="150"
          icon={Book}
        />
        <DashboardCard
          title="Word Groups"
          value="12"
          icon={List}
        />
        <DashboardCard
          title="Study Sessions"
          value="45"
          icon={Calendar}
        />
      </div>
    </div>
  );
};

export default Dashboard;
