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
      prop="number"
      sortable
      label="Part Number"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name_eng"
      sortable
      label="Description">
    </el-table-column>
    <el-table-column
      prop="inventory"
      sortable
      label="Inventory">
    </el-table-column>
    <el-table-column
      prop="price_list"
      sortable
      label="List Price">
    </el-table-column>
    <el-table-column
      prop="price_enduser"
      sortable
      label="Enduser Price">
    </el-table-column>
    <el-table-column
      prop="price_dealer"
      sortable
      label="Dealer Price">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" @click="fetchAppliedUnits(scope.$id, scope.row)" size="small">Order</el-button>
        <el-button type="text" @click="editKey(scope.$id, scope.row)" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog width="600px" :visible.sync="dialogFormVisible">
    <span slot="title"><i class="el-icon-info"></i> Part Number: {{ part_title }} </span>
    <p><span >{{ part_description }} </span></p>
    <el-transfer 
      v-model="value1" 
      :props="{
        key: 'id',
        label: 'model'
      }"
      :titles="['Unit Type', 'Target']"
      :data="unit_list">
    </el-transfer>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updatePartUnit">Confirm</el-button>
    </span>
  </el-dialog>
  <el-dialog width="600px" :visible.sync="dialogFormVisible2">
    <po-post
    v-on:cancel="dialogFormVisible2=false"
    :id="id">
    </po-post>
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
import PoPost from './POPost.vue';
export default {
  data() {
    const generateData = _ => {
      let uri = "unit/all/";
      const data = [];
      var data_raw = []
      this.$http
        .get(uri)
        .then(response => {
          data_raw = response.data;
          var len = data_raw.length;
          for (let i=1;i<=len;i++){
            data.push({
              id: data_raw[i-1].id,
              model: data_raw[i-1].model,
            })
          }
      });
      return data;
    }
    return {
      cases: [],
      unit_list: generateData(),
      total: 0,
      currentPage: 1,
      filters:{
        name:'',
        type:1
      },
      value1: [],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      part_title:"",
      part_id:"",
      part_description:"",
      units:[],
      id:0,
    };
  },
  components: {
    PoPost,
  },
  methods: {
    searchItems() {
      let uri = "parts";
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
    fetchAllItems() {
      let uri = "parts";
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
    editKey(a,b){
      this.dialogFormVisible=true;
      this.part_title=b.number;
      this.part_id=b.id;
      this.part_description=b.name_eng;
      this.current_part_id=b.id;
      this.value1 = b.unit_set;
    },
    updatePartUnit(){
      let uri="parts/"+this.part_id+"/";
      this.$http
        .patch(uri,{
          unit_set:this.value1,
        })
        .then(response => {
          this.value1=[];
          this.fetchAllItems();
          this.dialogFormVisible=false;
        })
        .catch(function (error) {
          alert('Sorry you do not have this permission', 'Permission Error', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        });
    },
    fetchAppliedUnits(a,b){
      this.dialogFormVisible2=true;
      this.id=b.id;
      //console.log(b.id);
      //console.log(this.id);
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