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
  <div class="flex items-center justify-center">
    <div class="w-full max-w-sm rounded-lg bg-gray p-6 shadow-md">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-700">Login</h2>

      <div class="mb-4">
        <input
          v-model="userName"
          type="text"
          placeholder="Enter your username"
          class="input w-full bg-gray"
        />
      </div>

      <div class="mb-4">
        <input
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="input w-full bg-gray"
        />
      </div>

      <button class="btn btn-primary w-full" @click="handleLogin">Login</button>
    </div>
  </div>
</template>
