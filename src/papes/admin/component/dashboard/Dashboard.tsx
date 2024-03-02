import React from "react";
import "./dashboard.scss";
import FeaturedInfo from "../featuredinfo/FeaturedInfo";
import Chart from "../charts/Chart";
import { userData } from "@/dummyData";
import WidgetSm from "../widgetSm/WidgetSm";
import WidgetLg from "../widgetlg/WidgetLg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FeaturedInfo />
      <Chart
        data={userData} // Add the missing data prop
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="dashboad-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Dashboard;
