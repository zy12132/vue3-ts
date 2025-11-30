<!--
 @file UserLogin
 @date 2025-11-29
-->
<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-box-header">
        <!-- <span class="game-title">RF ONLINE</span> -->
        <span class="close-btn">×</span>
      </div>
      <div class="login-box-content">
       <!-- 左侧插画区域 -->
       <div class="login-illustration"></div>
   
       <!-- 右侧登录表单区域 -->
       <div class="login-box">
       <!-- 登录表单内容 -->
       <div class="login-form">
        <h2 class="form-title">Log In</h2>
        
        <!-- 账号输入框 -->
        <div class="form-group">
          <label class="form-label">Login</label>
          <input type="text" class="form-input" placeholder="Enter your login">
        </div>

        <!-- 密码输入框 -->
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-input" placeholder="Enter your password">
        </div>

        <!-- 记住登录 -->
        <div class="form-check">
          <input type="checkbox" id="keep-logged" class="check-input">
          <label for="keep-logged" class="check-label">Keep me logged in</label>
        </div>

        <!-- 操作按钮 -->
        <div class="form-buttons">
          <button class="btn-login">LOG IN</button>
          <button class="btn-help">CAN'T LOG IN?</button>
        </div>

        <!-- 注册提示 -->
        <div class="register-tip">
          Not registered?
          <a href="#" class="register-link">CREATE A FREE ACCOUNT</a>
        </div>
      </div>
       </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import http from '../../apis/request';
import type { Todo } from '../../types/Todo';
import { useUserStore } from '@/stores/modules/userStore'; 
const items = ref<Todo>();

// 1. 调用模块函数，自动获取模块实例
const userStore = useUserStore();

onMounted(() => {
  http
     .get<Todo>('/todos/1')
     .then(res => {
        items.value = res.data;
        userStore.setTitle(items.value.title);
     });
})
</script>

<style scoped lang="scss">
$bgc-color: #1F3133;

/* 全局重置（若全局样式已包含可省略） */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* 容器：全屏+背景图 */
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/背景1.jpg');
  background-size: cover;
  padding: 50px 150px 30px;
}
.login-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

/* 登录框标题栏 */
.login-box-header {
  display: flex;
  justify-content: flex-end;
  padding: 4px 15px;
  background-color: $bgc-color;
  border-bottom: 1px solid #2C4347;
}

.login-box-content {
  display: flex;
  height: calc(100% - 24px);
}

/* 左侧插画区域 */
.login-illustration {
  width: 60%;
  height: 100%;
  background-image: url('../../assets/img/login-bg.jpg');
  background-position: -60px 0;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px 0 0 5px;
}

/* 右侧登录框 */
.login-box {
  flex: 1;
  background-color: #1A2D31;
  color: #DBE9EC;
  display: flex;
  flex-direction: column;
}


.game-title {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
.close-btn {
  font-size: 14px;
  cursor: pointer;
  color: #DBE9EC;
}
.close-btn:hover {
  color: #fff;
}

/* 登录表单区域 */
.login-form {
  padding: 20px 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  font-weight: lighter;
}

/* 表单组 */
.form-group {
  margin-bottom: 20px;
}
.form-label {
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
  color: #9CAFB7;
}
.form-input {
  width: 100%;
  padding: 10px 12px;
  background-color: #2C4347;
  border: 1px solid #3A565A;
  color: #DBE9EC;
  border-radius: 3px;
  outline: none;
}
.form-input::placeholder {
  color: #6B8A92;
}

/* 记住登录 */
.form-check {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-size: 12px;
}
.check-input {
  margin-right: 8px;
  accent-color: #2C4347;
}

/* 操作按钮 */
.form-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}
.btn-login {
  flex: 1;
  padding: 10px;
  background-color: #2C4347;
  color: #83C5BE;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}
.btn-login:hover {
  background-color: #3A565A;
}
.btn-help {
  flex: 1;
  padding: 10px;
  background-color: transparent;
  color: #83C5BE;
  border: 1px solid #3A565A;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
}

/* 注册提示 */
.register-tip {
  margin-top: auto;
  font-size: 12px;
  color: #9CAFB7;
  text-align: center;
}
.register-link {
  color: #83C5BE;
  text-decoration: none;
  margin-left: 5px;
}
.register-link:hover {
  text-decoration: underline;
}
</style>