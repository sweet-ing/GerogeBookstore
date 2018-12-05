<template>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 80%;margin: 0 10%;">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="b_name"
          label="书名">
        </el-table-column>
        <el-table-column
          prop="name"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="date"
          label="购买时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.$index, scope.row)">评价</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'IndentTable',
  data () {
    return {
      tableData: [{
        b_name: '解忧杂货店',
        name: '东野圭吾',
        date: '2018-08-08'
      }, {
        b_name: '云边有个小卖部',
        name: '张嘉佳',
        date: '2018-08-08'
      }, {
        b_name: '前端开发',
        name: '岳婷',
        date: '2018-08-08'
      }, {
        b_name: 'vue.js进阶',
        name: '岳婷',
        date: '2018-08-08'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
