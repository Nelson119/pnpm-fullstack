import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 登入頁面元件
 * 提供使用者輸入帳號密碼進行身份驗證
 */
const Login: React.FC = () => {
  // 導航鉤子，用於登入成功後跳轉
  const navigate = useNavigate();

  // 使用者輸入的帳號和密碼狀態
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // 錯誤訊息狀態
  const [error, setError] = useState("");
  // 登入中狀態
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 處理登入表單提交
   * @param e 表單提交事件
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 表單驗證
    if (!username.trim() || !password.trim()) {
      setError("請輸入帳號和密碼");
      return;
    }

    setIsLoading(true);
    setError("");

    // 模擬 API 請求延遲
    setTimeout(() => {
      try {
        // 模擬登入流程，實際上應驗證帳密後儲存 token
        localStorage.setItem("token", "dummy_token");
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", username);
        console.log("登入成功，導向 dashboard");

        setIsLoading(false);
        navigate("/dashboard");
      } catch (error) {
        // 處理可能的 localStorage 錯誤
        console.error("登入過程發生錯誤:", error);
        setError("登入過程發生錯誤，請稍後再試");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container max-w-400px mx-auto p-8 shadow-md rounded-lg mt-25">
      <h2 className="text-center mb-6">系統登入</h2>

      {/* 顯示錯誤訊息 */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 font-bold"
          >
            帳號
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded border border-gray-300"
            placeholder="請輸入帳號"
            disabled={isLoading}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 font-bold"
          >
            密碼
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded border border-gray-300"
            placeholder="請輸入密碼"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 bg-blue-600 text-white border-none rounded text-lg ${isLoading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
        >
          {isLoading ? "登入中..." : "登入"}
        </button>
        <button btn-primary=''>test</button>
      </form>
    </div>
  );
};

export default Login;
