<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="time"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="hobby"
      label="地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="personal"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    },
    loadAll () {
      axios.get('http://localhost:8081/static/data.json').then(res => {
        console.log('res', res)
        if (res) {
          console.log(2)
          console.log('res:', res)
          this.tableData = res.data.data
        }
      })
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.loadAll()
  }
}
</script>
