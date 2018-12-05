<template>
  <el-row id="footer">
    <el-col :span="6">
      <p>关于我们</p>
      <ul class="list">
        <li><a>乔治书屋</a></li>
        <li><a href="">招贤纳士</a></li>
        <li><a href="mailto:15133909982@163.com">联系我们</a></li>
      </ul>
    </el-col>
    <el-col :span="6">
      <p>合作伙伴</p>
      <ul class="list">
        <li><a href="http://www.91isoft.com/">融创软通</a></li>
        <li><a href="http://www.slcupc.edu.cn/">胜利学院</a></li>
        <li><a href="http://www.dangdang.com/">当当网</a></li>
      </ul>
    </el-col>
    <el-col :span="6">
      <p>支付方式</p>
      <ul class="list">
        <li><a href="">货到付款</a></li>
        <li><a href="">线上支付</a></li>
        <li><a href="">银行转账</a></li>
      </ul>
    </el-col>
    <el-col :span="6">
      <p>订单服务</p>
      <ul class="list">
        <li><a href="">配送服务查询</a></li>
        <li><a href="">自助取消订单</a></li>
        <li><a href="">自动修改订单</a></li>
      </ul>
    </el-col>
    <div class="copyright">
      Copyright © 2018本网站版权归中国石油大学胜利学院<a href="">岳婷</a>所有
    </div>
  </el-row>
</template>

<script>
export default {
}
</script>

<style scoped>
  /*底部区域*/
  #footer{
    text-align: center;
    text-decoration: none;
    margin-left: 20px;
    margin-right: 20px;
  }
  #footer p{
    font-size: 18px;
    line-height: 24px;
  }
  .list{
    position: relative;
    right: 18px;
  }
  #footer li{
    list-style-type: none;
    font-size: 14px;
  }
  #footer a{
    text-decoration: none;
    color: grey;
  }
  #footer li a:hover{
    color: red;
  }
  .copyright{
    font-size: 16px;
    padding-top: 40px;
    padding-bottom: 10px;
  }
</style>
