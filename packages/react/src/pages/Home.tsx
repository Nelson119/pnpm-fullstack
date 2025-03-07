import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>首頁</h2>
      <p>這是公開頁面</p>
      <Link to="/dashboard">前往 Dashboard（需登入）</Link>
    </div>
  );
};

export default Home;
