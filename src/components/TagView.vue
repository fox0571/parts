<template>
  <div class="table">
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="filters" @submit.native.prevent>
        <el-form-item>
          <el-input @keyup.enter="fetchItems" v-model="filters.name" placeholder="Search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="fetchItems">Search</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  <el-table
    v-loading="loading"
    border
    :data="cases"
    style="width: 100%">
    <el-table-column
      type="index"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      sortable
      label="Tag">
    </el-table-column>
    <el-table-column
      prop="name_chn"
      label="中文描述">
    </el-table-column>
    <el-table-column
      prop="model.length"
      sortable
      label="总计">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">Detail</el-button>
        <el-button type="text" @click="fetchTagInfo(scope.$id, scope.row)" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="Tag Edit" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="Tag name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文描述" :label-width="formLabelWidth">
        <el-input v-model="form.name_chn" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateTagInfo">Confirm</el-button>
    </span>
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

.el-input{
  width:200px;
}

.el-dialog{
  width:400px;
}
</style>
<script>
export default {
  data() {
    return {
      cases: [],
      total: 0,
      currentPage: 1,
      filters:{
        name:'',
        type:1
      },
      dialogFormVisible: false,
      form: {
        name: '',
        name_chn: '',
        id:'',
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    fetchItems() {
      let uri = "tag/?format=json";
      this.loading = true;
      this.$http
        .get(uri, {
          params: {
            page: this.currentPage,
            search: this.filters.name,
            
          }
        })
        .then(response => {
          this.cases = response.data.results;
          this.total = response.data.count;
          this.loading = false;
        });
    },
    fetchTagInfo(a,b) {
      this.dialogFormVisible=true;
      this.form=b;
    },
    updateTagInfo(){
      this.$http
      .patch("tag/"+this.form.id+"/",{
          name: this.form.name,
          name_chn: this.form.name_chn,
        
      })
      .then(response => {
        this.dialogFormVisible=false;
      });     
    },
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchItems();
    },
  },
  created: function() {
    this.fetchItems();
  }
};
</script>