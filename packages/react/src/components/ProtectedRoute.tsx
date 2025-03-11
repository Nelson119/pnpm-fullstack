// src/components/ProtectedRoute.tsx
import React from "react";
// import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // 假設你有一個 useAuth hook 來管理驗證狀態

interface ProtectedRouteProps {
  requiredRole?: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredRole,
  children,
}) => {
  const { isAuthenticated, userRole } = useAuth();
  console.log(isAuthenticated, userRole, requiredRole);

  // 若未登入，導向登入頁面
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  // 若需要特定角色但使用者不符，則可導向權限不足頁面或其他處理
  // if (requiredRole && userRole !== requiredRole) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;
