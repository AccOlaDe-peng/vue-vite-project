<template>
  <div class="login-container">
    <el-form :model="loginForm" label-width="120px" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const loginForm = reactive({
    username: '',
    password: ''
})
const handleLogin = () => {
    console.log(JSON.stringify(loginForm))
    
      // 在这里处理登录逻辑
    console.log('登录表单已提交')
    console.log(loginForm.username, loginForm.password)
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  margin: auto;
  width: 400px;
}
</style>
