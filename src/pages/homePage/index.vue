<template>
  <div id="myHomePage">
  <el-row>
    <el-col :span="6"><home-left></home-left></el-col>
    <el-col :span="12"><home-middle></home-middle></el-col>
    <el-col :span="6"><home-right></home-right></el-col>
  </el-row>
  <el-row><home-contain></home-contain></el-row>
  </div>
</template>

<script>
import homeLeft from './components/homeLeft'
import homeMiddle from './components/homeMiddle'
import homeRight from './components/homeRight'
import homeContain from './components/homeContain'
export default {
  name: 'index',
  components: {
    homeLeft,
    homeMiddle,
    homeRight,
    homeContain
  }
}
</script>

<style scoped>

</style>
