<template>
  <!--我的书房-->
  <div>
    <div class="library">
      <el-row>
        <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
          <el-card shadow="hover">
            <div id="imgCard"><img src="../../assets/img/云边有个小卖部.jpg" class="image"></div>
            <div>
              <span>云边有个小卖部</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .library {
    margin-left: 8em;
    text-align: center;
  }
  #imgCard {
    margin-right: 4em;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
