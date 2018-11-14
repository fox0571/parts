<template>
  <div>
    <el-input
        placeholder="请输入关键字过滤"
        prefix-icon="el-icon-search"
        v-model="keyword">
    </el-input>
    <p/>
    <el-table
      :data="list"
      border
      stripe
      @sort-change="sortChange"
      style="width: 100%">
      <el-table-column
        fixed
        sortable
        prop="id"
        label="ID"
        
        width="150">
      </el-table-column>
      <el-table-column
      prop="number"
      label="Part Number"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name_eng"
      label="Description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="inventory"
      label="Inventory">
    </el-table-column>
    <el-table-column
      prop="price_list"
      label="List Price">
    </el-table-column>
    <el-table-column
      prop="price_enduser"
      label="Enduser Price">
    </el-table-column>
    <el-table-column
      prop="price_dealer"
      label="Dealer Price">
    </el-table-column>
      
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        
      </el-table-column>
    </el-table>

    <el-pagination 
        layout="prev, pager, next"
        :total="1000"
        ref="page1" url="/parts" :keyword="keyword" :sort="sort" v-model="list"/>
  </div>
</template>

<script>
export default {
  methods: {
    
    // 刷新表格数据
    refreshConfig(){
      this.$refs.page1.reload();
    }
  },
  data() {
    return {
      keyword:"",
      list: [],
      sort: {}
    };
  },
  mounted() {
    const axios = require('axios');
    axios.get('http://192.168.5.130/api/parts/?format=json')
      .then(response => {
         this.list = response.data.results
      }) 
      
  }
};
</script>