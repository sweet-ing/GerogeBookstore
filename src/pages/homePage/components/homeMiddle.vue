<template>
  <div>
    <el-carousel :interval="4000" type="card" height="400px" width="400px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img v-bind:src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'homeMiddle',
  data () {
    return {
      imgList: [
        {url: require('../../../assets/img/云边有个小卖部.jpg')},
        {url: require('../../../assets/img/乖 摸摸头.jpg')},
        {url: require('../../../assets/img/你坏.jpg')},
        {url: require('../../../assets/img/假面之夜.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
  div{
    margin-top: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  img {
    width: 400px;
    height: 400px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
