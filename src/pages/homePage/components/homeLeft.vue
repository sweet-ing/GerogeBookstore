<template>
  <div>
    <div id="aside">
      <h2>乔治书屋图书分类</h2>
      <ul id="menu">
        <!--乔治图书精品推荐-->
        <li>
          <a href="">乔治书屋精品推荐</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>热爱编程的乔治</dt>
              <dd v-for="(list,index) in lists1" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--教育-->
        <li>
          <a href="">教育</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>教材</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>外语</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>中小学</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>考试</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--科技-->
        <li>
          <a href="">科技</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>计算机</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>科普读物</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>建筑</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>医学</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>农林/林业</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>自然科学</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--生活-->
        <li>
          <a href="">生活</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>亲子/家教</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>育儿/早教</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>孕产/胎教</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>保健/养生</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>烹饪/美食</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>旅游/地图</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>家庭/家居</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>休闲/爱好</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>体育/运动</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--文艺-->
        <li>
          <a href="">文艺</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>文学</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>传记</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>艺术</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>摄影</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--人文社科-->
        <li>
          <a href="">人文社科</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>历史</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>文化</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--小说-->
        <li>
          <a href="">小说</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>分类</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--青春文学-->
        <li>
          <a href="">青春文学</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>文学类</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>动漫/幽默</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--经管-->
        <li>
          <a href="">经管</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>经济</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>管理</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>投资理财</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--童书-->
        <li>
          <a href="">童书</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>人气作家</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>按年龄段选书</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl class="submenu">
              <dt>按内容选书</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
        <!--成功励志-->
        <li>
          <a href="">成功励志</a>
          <div class="tankuang">
            <dl class="submenu">
              <dt>分类</dt>
              <dd v-for="(list,index) in lists2" :key="index">
                <a v-bind:href="list.url">{{list.name}}</a>
              </dd>
              <div class="clear"></div>
            </dl>
          </div>
          <div class="clear"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeLeft',
  data () {
    return {
      lists1: [{'name': '《小猪佩奇》', 'url': 'img'}, {'name': '《Web UI前端设计基础》', 'url': 'img'}, {'name': '《Web UI前端框架应用与开发》', 'url': 'img'}, {'name': '《Java程序设计基础》', 'url': 'img'}, {'name': '《oracle11g数据库开发与实战》', 'url': 'img'}, {'name': '《Java web编程技术》', 'url': 'img'}, {'name': '《JavaEE轻量级框架应用与开发》', 'url': 'img'}, {'name': '《软件测试技术》', 'url': 'img'}, {'name': '《项目管理与软件配置》', 'url': 'img'}, {'name': '《基于软件开发项目的毕业设计》', 'url': 'img'}, {'name': '更多推荐，敬请期待', 'url': 'img'}],
      lists2: [{'name': '《小猪佩奇》', 'url': 'img'}, {'name': '《Web UI前端设计基础》', 'url': 'img'}, {'name': '《Web UI前端框架应用与开发》', 'url': 'img'}, {'name': '《Java程序设计基础》', 'url': 'img'}, {'name': '《oracle11g数据库开发与实战》', 'url': 'img'}, {'name': '《Java web编程技术》', 'url': 'img'}, {'name': '《JavaEE轻量级框架应用与开发》', 'url': 'img'}, {'name': '《软件测试技术》', 'url': 'img'}, {'name': '《项目管理与软件配置》', 'url': 'img'}, {'name': '《基于软件开发项目的毕业设计》', 'url': 'img'}, {'name': '更多推荐，敬请期待', 'url': 'img'}]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h2 {
    color: #FFFFFF;
    width: 242px;
    background: #487A6F;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 0;
    margin-left: 50px;
  }

  #menu {
    margin-top: 0;
    width: 240px;
    background: #FFFFFF;
    text-align: center;
    font-size: 16px;
    margin-left: 10px;
  }

  #menu li {
    width: 240px;
    float: left;
    display: block;
    text-align: center;
    line-height: 40px;
    background: #FFFFFF;
    position: relative;
    border-left:1px solid #487A6F;
    border-right:1px solid #487A6F;
    border-bottom:1px dotted #487A6F;
    height: 40px;
  }

  .submenu dt {
    font-weight: bold;
    color: #487A6F;
    text-align: left;
  }

  .submenu dd {
    padding-left: 30px;
    padding-right: 20px;
  }

  #menu li:hover {
    border-right: none;
  }

  #menu li a {
    color: #487A6F;
  }

  #menu li dd a {
    float: left;
    border-right: 1px solid #CCCCCC;
    line-height: 16px;
    font-size: 12px;
    color: gray;
    line-height: 16px;
  }

  #menu li:hover dd a {
    font-size: 12px;
    color: gray;
    line-height: 16px;
  }
  #menu li:hover div a:hover {
    color: orange;
  }
  #menu li:hover .tankuang {
    left: 240px;
    top: 0;
  }
  .tankuang {
    float: left;
    position: absolute;
    left: -999em;
    text-align: left;
    border: 2px solid #487A6F;
    width: 500px;
    background: #FFFFFF;
    padding: 5px 0 5px;
    z-index: 190;
  }
  /*清楚容器浮动*/
  .clear {
    clear: both;
    visibility: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
</style>
