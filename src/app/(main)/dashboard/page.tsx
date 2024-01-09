import React from "react";
import { NextPage } from "next";

interface DashboardProps {
  // Add your prop types here
}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* Add your page content here */}
    </div>
  );
};

export default Dashboard;
