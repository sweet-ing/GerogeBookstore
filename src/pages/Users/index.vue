<template>
  <!--个人中心-->
  <div>
    <div>
      <el-row>
        <el-col :span="4" class="p_left">
          <img src="../../assets/img/page.jpg" width="120px" height="120px"/>
          <h2>小猪佩奇</h2>
          <p><a href="">安全设置</a></p>
          <p><a href="">个人资料</a></p>
          <p><a href="">成长信息</a></p>
          <p><a href="">交易记录</a></p>
          <p><a href="">收获地址</a></p>
          <p><a href="">微博绑定设置</a></p>
          <p><a href="">应用授权</a></p>
          <p><a href="">分享我的主页</a></p>
          <p><a href="">注销账号</a></p>
        </el-col>
        <el-col :span="18" class="p_right">
          <h3>佩奇小姐私人信息</h3>
          <table>
            <tr>
              <th>会员名</th>
              <td><input value="粉红猪小妹" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>真实姓名</th>
              <td><input value="小猪佩奇" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>猪生格言</th>
              <td>猪生没有怕不过的山，迈不过的坎儿。</td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>个人简介</th>
              <td>小猪佩奇是一个可爱的小猪。她已经五岁了，与她的妈妈，爸爸，和弟弟乔治生活在一起。佩奇最喜欢做的事情是玩游戏，打扮的漂亮，度假，以及在小泥坑里快乐的跳上跳下和与小羊苏西（她最好的朋友）乔治（她的弟弟）一起玩儿，拜访她的爷爷，奶奶，伯父，伯母。故事内容多数环绕日常生活，比如小孩子们参加学前游戏小组（playgroup）、探访祖父母和表亲、在游乐场游玩、踏单车等等..</td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>性别</th>
              <td><input value="女" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>年龄</th>
              <td><input value="5" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>电话绑定</th>
              <td><input value="17502272664" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>QQ绑定</th>
              <td><input value="2329156157" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>微博绑定</th>
              <td><input value="粉红猪小妹" /></td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
            <tr>
              <th>收货地址</th>
              <td>天津市西青区中北天软创业学院803</td>
              <td class="revise"><a href="">修改</a></td>
            </tr>
          </table>
          <h3 id="anchor">安全设置</h3>
          <table>
            <tr>
              <th>安全等级</th>
              <td><img src="../../assets/img/jindutiao.png" width="200px" height="24px">中等级别，可选择<a href="">提升安全等级</a></td>
            </tr>
            <tr>
              <th>登陆密码</th>
              <td><input type="password" value="*******************"></td>
            </tr>
            <tr>
              <th>登陆方式</th>
              <td>扫码登陆</td>
            </tr>
          </table>
          <h3>注销账户</h3>
          <p>密码验证，方可注销。</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #487A6F;
  }
  a:hover{
    color: gray;
  }
  .p_left{
    margin: 20px 6px;
    text-align: right;
  }
  .p_left h2{
    color: #487A6F;
  }
  .p_left p{
    font-size: 16px;
    line-height: 30px;
  }
  .p_right{
    border: 1px solid #487A6F;
    border-left: 1px solid darkgray;
    margin: 20px 0px;
    text-align: left;
  }
  table{
    margin: 30px 40px;
  }
  table tr{
    border-bottom: 1px dashed darkgray;
    line-height: 30px;
  }
  table tr th{
    width: 90px;
  }
  .revise{
    width: 60px;
    text-align: right;
  }
  table td input{
    border: 0;
  }
</style>
