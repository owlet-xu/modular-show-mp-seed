<template>
  <div class="login-container">
    <div class="login-form">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="loginForm.email" :state="loginFormState.email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password" :state="loginFormState.password"></mt-field>
      <mt-button class="login-btn " type="primary" @click="handleLogin">登录</mt-button>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style lang="scss" scoped src="./login.scss"></style>
