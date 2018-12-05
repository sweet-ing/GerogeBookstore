<template>
<div id="index">
  <my-header></my-header>
  <my-nav></my-nav>
  <my-content></my-content>
  <my-footer></my-footer>
</div>
</template>

<script>
import myHeader from '../components/header'
import myNav from '../components/nav'
import myContent from '../components/content'
import myFooter from '../components/footer'
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false, // 侧边栏是否折叠
      compareCollapse: true // 右侧对比菜单
    }
  },
  props: {},
  components: {
    myHeader,
    myNav,
    myContent,
    myFooter
  },
  computed: {},
  watch: {},
  methods: {
    returnSidebar (val) {
      this.isCollapse = val
    },
    returnCompareCollapse (val) {
      console.log(val)
      this.compareCollapse = val
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style>
</style>
