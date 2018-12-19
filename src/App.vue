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
      </el-header>
      <el-container >
      <el-aside width="200px" style="background-color: #B3C0D1">
        <el-menu
          :router="true">
          <el-menu-item v-for="item in menu" :index="item.id" :key="item.componentName">
            <template slot="title">
              <span v-text="item.name"></span>
            </template>
          </el-menu-item>
<!-- 
          <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>PO</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="new">New</el-menu-item>
            <el-menu-item index="ordered">Ordered</el-menu-item>
            <el-menu-item index="shipped">Shipped</el-menu-item>
            <el-menu-item index="received">Received</el-menu-item>
          </el-menu-item-group> 
        </el-submenu>-->
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
import TableView from './components/TableView.vue'
import TagView from './components/TagView.vue'
import menu from '@/config/menu-config'

export default {
  name: 'app',
  components: {
    TableView,
    TagView,
  },
  data () {
    return {
      menu:menu,
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
