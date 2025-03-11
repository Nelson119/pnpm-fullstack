import { defineStore } from 'pinia'

interface AuthState {
  userName: string
  token: string
  role: string
  scope: string[]
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    userName: '',
    token: '',
    role: '',
    scope: []
  }),
  getters: {
    isAuthenticated: (state) => !!state.token // 是否已登入
  },
  actions: {
    login(userData: Partial<AuthState>) {
      // 這裡暫時不實作，之後可改為 API 調用
      console.log('Login method called with:', userData)
      this.userName = userData.userName || ''
      this.token = userData.token || ''
      this.role = userData.role || ''
      this.scope = userData.scope || []
    },
    logout() {
      this.userName = ''
      this.token = ''
      this.role = ''
      this.scope = []
    }
  }
})
