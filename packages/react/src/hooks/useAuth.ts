import { useEffect, useState } from 'react'

export const useAuth = () => {
  // 預設狀態，實際上可從 context、redux 或 localStorage 取得 token、角色資訊
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [userRole, setUserRole] = useState<string>('')

  useEffect(() => {
    // 模擬從 localStorage 或 API 取得驗證資訊
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    if (token) {
      setIsAuthenticated(true)
      setUserRole(role || '')
    }
  }, [])



  return { isAuthenticated, userRole }
}
