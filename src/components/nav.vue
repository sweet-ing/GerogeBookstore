<template>
  <!--导航区域-->
  <el-row id="front-nav" route>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4">
      <router-link :to="{name:'homePage'}" class="lian">书屋首页</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name:'Library'}" class="lian">乔治书房</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name:'Indent'}" class="lian">我的订单</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name:'Trolley'}" class="lian">购物车</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name:'Users'}" class="lian">个人中心</router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style scoped>
  .lian {
    display: block;
    height: 52px;
    line-height: 52px;
    border-bottom: 4px solid #adadad;
    text-align: center;
    text-decoration: none;
    color: #3B4053;
  }
  .lian:hover {
    border-bottom: 4px solid #FF0000;
    color: #FF0000;
  }
</style>
