<template>
  <div>
    <div class="bg"></div>
    <div class="contain">
      <h1>欢迎来到乔治书屋</h1>
      <form ref="loginForm" action="" method="post" class="login" name="login" id="login"  @keyup.enter="toLogin">
        <h3>用户登录</h3>
        <p><input v-model="uname" class="input-text" type="text" required="required" autofocus="autofocus" placeholder="姓名/手机号/邮箱"></p>
        <p><input v-model="pwd" class="input-pwd" type="password" required="required"></p>
        <p><input class="input-btn" type="button" value="登录" @click="toLogin"></p>
        <h6><a href="">忘记密码</a><a href="">免费注册</a></h6>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      uname: '',
      pwd: ''
    }
  },
  methods: {
    toLogin () {
      console.log(this.uname)
      if (this.uname === '') {
        this.$notify.warning({
          title: '警告',
          message: '用户名不能为空'
        })
      } else if (this.pwd === '') {
        this.$notify.warning({
          title: '警告',
          message: '密码不能为空'
        })
      } else {
        if (this.uname !== '小猪佩奇') {
          this.$notify.warning({
            title: '警告',
            message: '用户名不存在'
          })
        } else if (this.pwd !== '123456') {
          this.$notify.warning({
            title: '警告',
            message: '密码错误'
          })
        } else {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          setTimeout(() => {
            loading.close()
            this.$router.push({path: '/'})
          }, 2000)
        }
      }
    }
  }
}
</script>

<style scoped>
  .contain{
    margin-top: 80px;
  }
  h1{
    font-family:"华文行楷";
    color: #487A6F;
    text-align: center;
  }
  #login{
    width: 300px;
    background: #FFFFFF;
    margin: 30px auto;
    padding: 25px;
    border-radius: 20px;
  }
  #login h3{
    color: #487A6F;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 20px;
    text-align: center;
  }
  #login p{
    margin-bottom: 25px;
  }
  #login .input-text{
    border: 1px #ccc solid;
    height: 40px;
    width: 248px;
    background:url(../assets/img/login.png) no-repeat 0 0;
    padding-left: 50px;
    font-size: 14px;
    font-family: "微软雅黑";
  }
  #login .input-pwd{
    border: 1px #ccc solid;
    height: 40px;
    width: 248px;
    background:url(../assets/img/password.png) no-repeat 0 0;
    padding-left: 50px;
    font-size: 14px;
    font-family: "微软雅黑";
  }
  #login .input-btn{
    display: block;
    width: 300px;
    height: 40px;
    border: 0;
    background: #487A6F;
    color:white;
    font-family: "微软雅黑";
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 5px;
    border-radius:5px;
  }
  #login .input-btn:hover{
    background: #FF0000;
    cursor: pointer;
  }
  #login h6{
    text-align: right;
  }
  #login h6 a{
    text-decoration: none;
    color: gray;
    font-weight: normal;
    margin-right: 12px;
  }
  #login h6 a:hover{
    color: red;
  }
  .bg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("../assets/img/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
</style>
