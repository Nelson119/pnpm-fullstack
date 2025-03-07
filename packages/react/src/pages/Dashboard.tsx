import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Dashboard</h2>
      <p>這是一個受保護的頁面，只有驗證後才能看到。</p>
    </div>
  );
};

export default Dashboard;
