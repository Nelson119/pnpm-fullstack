import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 模擬登入流程，實際上應驗證帳密後儲存 token
    localStorage.setItem("token", "dummy_token");
    localStorage.setItem("role", "admin");
    console.log("dashboard");

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>登入頁面</h2>
      <button onClick={handleLogin}>登入</button>
    </div>
  );
};

export default Login;
