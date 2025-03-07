import { RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import React, { lazy } from "react";

interface CustomRouteObject extends Omit<RouteObject, "element"> {
  element: React.ReactNode;
  index?: false;
  meta?: {
    requiresAuth: boolean;
    requiredRole?: string;
  };
}

/**
 * 路由配置物件，可自訂 meta 欄位管理權限
 */
const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: React.createElement(lazy(() => import("../pages/Home"))),
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute requiredRole="admin">
        {React.createElement(lazy(() => import("../pages/Dashboard")))}
      </ProtectedRoute>
    ),
    meta: { requiresAuth: true, requiredRole: "admin" },
  },
  {
    path: "/login",
    element: React.createElement(lazy(() => import("../pages/Login"))),
    meta: { requiresAuth: false },
  },
  {
    path: "*",
    element: React.createElement(lazy(() => import("../pages/NotFound"))),
    meta: { requiresAuth: false },
  },
];

export default routes;
