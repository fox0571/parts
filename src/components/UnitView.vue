<template>
  <div class="table">
    <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="12" class="toolbar">
      <el-form :inline="true" :model="filters" @submit.native.prevent>
        <el-form-item>
          <el-input @keyup.enter="fetchItems" v-model="filters.name" placeholder="Search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="fetchItems">Search</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    
    <el-col :span="6" :offset="15">
      <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">New</el-button>
    </el-col>
    </el-row>
  <el-table
    v-loading="loading"
    border
    :data="cases"
    style="width: 100%">
    <el-table-column
      type="index"
      width="40">
    </el-table-column>
    <el-table-column
      prop="model"
      sortable
      label="Model"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name_eng"
      sortable
      label="Description">
    </el-table-column>
    <el-table-column
      prop="name_chn"
      sortable
      label="中文名">
    </el-table-column>
    <el-table-column
      prop="dimension"
      sortable
      label="Dimension">
    </el-table-column>
    <el-table-column
      prop="spec"
      sortable
      label="Specification">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog width="600px" :visible.sync="dialogFormVisible">
    <span slot="title"><i class="el-icon-document"></i> New Unit Model </span>
    <unit-form></unit-form>
  </el-dialog>
  <div align="center">
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size=50
        layout="total, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
  </div>
  
</template>

<style>
.el-table .warning-low {
  background: oldlace;
}

.el-table .success-reg {
  background: #f0f9eb;
}
</style>
<script>
import UnitForm from './UnitForm.vue';


export default {
  components: {
    UnitForm,
  },
  data() {
    return {
      cases: [],
      total: 0,
      currentPage: 1,
      dialogFormVisible: false,
      filters:{
        name:'',
        type:1
      },
      json_data:[],
      fields:['sksid','','number','name','qty'],
    };
  },
  methods: {
    fetchItems() {
      let uri = "unit/?format=json";
      this.loading = true;
      this.$http
        .get(uri, {
          params: {
            page: this.currentPage,
            search: this.filters.name,
            
          }
        })
        .then(response => {
          this.cases = response.data;
          this.total = response.data.count;
          this.loading = false;
        });
    },
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchItems();
    }
  },
  created: function() {
    this.fetchItems();
  }
};
</script>