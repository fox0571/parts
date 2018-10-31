<template>
  <div id="app">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
      <el-container >
      <el-aside width="200px" style="background-color: #B3C0D1">
        <el-input
          placeholder="Type something"
          v-model="input23">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Request</template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>Inventory</template>
          </el-submenu>
        </el-menu>
      </el-aside>
        <el-main>
          <table-view></table-view>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address">
            </el-table-column>
          </el-table> -->
        </el-main>
    </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
import HelloWorld from './components/HelloWorld.vue'
import TableView from './components/TableView.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TableView
  },
  // mounted() {
  //   const axios = require('axios');
  //   axios.get('http://192.168.5.130/api/case/?format=json')
  //     .then(response => {
  //        tableData.rows = response.data
  //     }) 
      
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
