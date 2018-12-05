<template>
  <el-row id="front-header">
    <el-col :span="10">
      <img src="../assets/img/logo.jpg"/>
    </el-col>
    <el-col :span="14" class="col1">
      <input class="text" type="text" />
      <input class="button" type="button" value="搜 索" />
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style scoped>
  .col1{
    margin-top: 50px;
  }
  .text{
    width: 420px;
    height: 35px;
    border: 2px solid red;
  }
  .button{
    width: 100px;
    height: 39px;
    background-color: red;
    color: white;
    border: 2px solid red;
    font-size: 16px;
    line-height: 35px;
  }
</style>
