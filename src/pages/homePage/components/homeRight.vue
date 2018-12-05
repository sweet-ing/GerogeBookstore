<template>
  <div>
    <div class="tianqi">
      <iframe id="fancybox-frame" name="fancybox-frame1532744633510"
              frameborder="0" scrolling="no" hspace="0"
              src="http://i.tianqi.com/index.php?c=code&a=getcode&id=38&h=60&w=610">
      </iframe>
    </div>
    <div class="new">
      <h3>乔治热销榜</h3>
      <ol>
        <li><span class="red">1</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Web UI前端设计基础</a></li>
        <li><span class="red">2</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Web UI前端框架应用与开发</a></li>
        <li><span class="red">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Java程序设计基础</a></li>
        <li><span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Oracle11g数据库开发与实践</a></li>
        <li><span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Java Web编程技术</a></li>
        <li><span>6</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Java EE轻量级框架应用与开发</a></li>
        <li><span>7</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">软件测试技术</a></li>
        <li><span>8</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">项目管理与软件配置</a></li>
        <li><span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">职业素质培养</a></li>
        <li><span>10</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">基于软件开发项目的毕业设计</a></li>
      </ol>
      <p><a href="">查看完整榜单>></a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRight'
}
</script>

<style scoped>
  .tianqi{
    height: 50px;
  }
  .new h3{
    color: red;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #F5F5F5;
  }
  .new li{
    text-align: left;
    font-size: 16px;
    color: #487A6F;
    height: 35px;
    list-style-type: none;
  }
  .new li a{
    text-decoration: none;
    color: #487A6F;
  }
  .new li a:hover{
    color: red;
  }
  .new li .red{
    color: red;
  }
  .new p{
    text-align: right;
  }
</style>
