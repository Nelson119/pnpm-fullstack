import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RouteGuardProps {
  redirectPath?: string;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ redirectPath = "/login" }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // 透過 Outlet 輸出子路由元件
  return <Outlet />;
};

export default RouteGuard;
