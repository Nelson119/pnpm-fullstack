<script setup lang="ts">
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'

const authStore = useAuthStore()
const userName = ref('')
const password = ref('')

const handleLogin = () => {
  // 這裡可以先 console.log()，之後再實作登入邏輯
  console.log('Login clicked:', {
    userName: userName.value,
    password: password.value
  })
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-700">Login</h2>

      <div class="mb-4">
        <label class="label">
          <span class="text-base label-text">Username</span>
        </label>
        <input
          v-model="userName"
          type="text"
          placeholder="Enter your username"
          class="input input-bordered w-full"
        />
      </div>

      <div class="mb-4">
        <label class="label">
          <span class="text-base label-text">Password</span>
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="input input-bordered w-full"
        />
      </div>

      <button class="btn btn-primary w-full" @click="handleLogin">Login</button>
    </div>
  </div>
</template>
