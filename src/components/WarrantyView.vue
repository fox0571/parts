<template>
  <div class="table">
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="filters" @submit.native.prevent>
        <el-form-item>
          <el-input @keyup.enter.native="searchItems" v-model="filters.name" placeholder="Search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="fetchAllItems">Search</el-button>
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
      width="40">
    </el-table-column>
    <el-table-column
      prop="serialNumber"
      sortable
      label="Serial Number"
      width="280">
    </el-table-column>
    <el-table-column
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" @click="showDetail(scope.$id, scope.row)" size="small">View</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="Warranty Detail" :visible.sync="dialogFormVisible">
    <div class="note">{{warrantyInfo}}
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
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

.note pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
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
      warrantyInfo:"",
      dialogFormVisible: false,
    };
  },
  methods: {
    searchItems() {
      let uri = "case";
      this.loading = true;
      this.$http
        .get(uri, {
          params: {
            search: this.filters.name,
          }
        })
        .then(response => {
          this.cases = response.data.results;
          this.total = response.data.count;
          this.loading = false;
        });
    },
    showDetail(a,b){
      this.$http.get("case/"+b.id+"/")
      .then(response => {
        this.dialogFormVisible=true
        this.warrantyInfo=response.data.warrantyNote
        console.log(this.warrantyInfo)
      })
    },
    fetchAllItems() {
      let uri = "case";
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
          this.value1 = response.data.results.unit_set;
          this.loading = false;
        });
    },
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchAllItems();
    }
  },
  created: function() {
    this.fetchAllItems();
  }
};
</script>