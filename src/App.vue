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
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><router-link to="tag" ><i class="el-icon-message"></i>Tag</router-link></template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i><router-link to="part">Inventory</router-link></template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i><router-link to="unit">Unit</router-link></template>
          </el-submenu>
        </el-menu>
      </el-aside>
        <el-main>
          <router-view></router-view>
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
import TagView from './components/TagView.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TableView,
    TagView,
  },
  data () {
    return {
      total: 0,
      list: [],
      totalCount: 0,
      currentPage: 1,
    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
