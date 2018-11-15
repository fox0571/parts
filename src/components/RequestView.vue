<template>
  <div class="table">
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
        <vue-csv-downloader
            :data="json_data"
            :fields="fields"
            :downloadName="fileName"
        > Download
        </vue-csv-downloader>
        </el-col>
    </el-row>
  <el-table
    v-loading="loading"
    border
    :data="data"
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
      prop="name"
      sortable
      label="Description">
    </el-table-column>
    <el-table-column
      prop="sksid"
      sortable
      label="SKSID">
    </el-table-column>
    <el-table-column
      prop="sn"
      sortable
      label="Serial Number">
    </el-table-column>
    <el-table-column
      prop="qty"
      sortable
      label="Quantity">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">Detail</el-button>
        <el-button type="text" @click="fetchRequestInfo(scope.$id, scope.row)" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="Part Number Edit" :visible.sync="dialogFormVisible">
    <el-form :model="form" @submit.native.prevent>
        <el-form-item label="Part number" :label-width="formLabelWidth">
        <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateRequestInfo">Confirm</el-button>
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
</style>
<script>
import VueCsvDownloader from 'vue-csv-downloader';


export default {
  components: {
    VueCsvDownloader,
  },
  data() {
    return {
      dialogFormVisible: false,
      total: 0,
      currentPage: 1,
      filters:{
        name:'',
        type:1
      },
      json_data:[],
      data:[],
      fields:['sksid','','number','name','qty'],
      loading: false,
      fileName:"Parts For Warranty.csv",
      form: {
        number: '',
      },
      formLabelWidth: '120px',
    };
  },
  methods: {
    fetchPageData(){
      let uri = "part";
      this.loading = true;
      this.$http
        .get(uri, {
          params: {
            page: this.currentPage,
          }
        })
        .then(response => {
          this.data = response.data.results;
          this.total = response.data.count;
          this.loading = false;
        });
    },
    updateRequestInfo(){
      this.$http
      .patch("part/"+this.form.id+"/",{
          number: this.form.number,        
      })
      .then(response => {
        console.log(response.status);
        this.dialogFormVisible=false;
      });
    },
    fetchRequestInfo(a,b) {
      this.dialogFormVisible=true;
      this.form=b;
    },
    fetchData(){
      let uri = "part/warranty";
      this.$http
        .get(uri)
        .then(response => {
          this.json_data = response.data;
        });
    },

    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchPageData();
    }
  },
  created: function() {
    this.fetchPageData();
    this.fetchData();
  }
};
</script>