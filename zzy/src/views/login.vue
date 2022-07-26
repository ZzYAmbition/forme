<template>
  <div id="login">
    <div class="form_wrap">
      <el-input placeholder="请输入用户名" v-model="account" clearable>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        clearable
      ></el-input>
      <el-row>
        <div>
          <el-button round>注册</el-button>
          <el-button type="primary" round @click="login">登录</el-button>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.account === "zzy" && this.password === "062800") {
        localStorage.setItem("account", this.account);
        this.$router.push("/home");
      } else {
        Message({
          message: "账号或者密码错误！",
          type: "warning",
          duration: 2000,
          customClass: "login-warning",
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
#login {
  box-sizing: border-box;
  padding-top: 100px;
  height: calc(100% - 49px);
  .form_wrap {
    .el-input {
      display: block;
      margin: 20px auto;
      width: 240px;
      /deep/.el-input__inner {
        border-radius: 20px;
      }
    }
    .el-row {
      display: flex;
      justify-content: center;
      div {
        display: flex;
        width: 240px;
        justify-content: space-between;
      }
    }
  }
}
.login-warning {
  color: skyblue;
}
</style>