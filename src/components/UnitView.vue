<template>
  <div class="table" >
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="toolbar">
        <el-form :inline="true" :model="filters" @submit.native.prevent>
          <el-form-item>
            <el-input @keyup.enter.native="fetchItems" v-model="filters.name" placeholder="Search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="submit" @click="fetchItems">Search</el-button>
          </el-form-item>
          <el-form-item>
            <i class="el-icon-question" @click="howToDialogVisible=true">How to</i>
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
          <el-button type="text" size="small" @click="fetchUnitDetail(scope.$id, scope.row)">Detail</el-button>
          <el-button type="text" size="small" @click="showUnitPartsRelation(scope.$id, scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog width="600px" :visible.sync="dialogFormVisible" >
      <span slot="title"><i class="el-icon-document"></i> New Unit Model </span>
      <unit-form v-on:cancel="closeDialog()"></unit-form>
    </el-dialog>
    <el-dialog width="600px" :visible.sync="partListForUnit" >
      <span slot="title"><i class="el-icon-document"></i> Part List </span>
      <el-table
        border
        v-loading="partLoading"
        :data="parts"
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
      </el-table>
      <span slot="footer" class="dialog-footer">
          <el-button @click="partListForUnit = false">Cancel</el-button>
          <el-button @click="partListForUnit = false">Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="How to"
      :visible.sync="howToDialogVisible"
      width="40%">
      <p>1.Get the  model number of the unit. </p>
      <p>2. Type in/ put the model number in the search bar at the top of the page and click enter. </p>
      <p>3. Make sure you verify the model number as GR or non-GR for cold units before selecting the unit.  </p>
      <p>4. Select "Details" tab located below opeartions column for the desired unit. </p>
      <p>5. Scroll through the list until you get the desired part number for the part.  </p>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="howToDialogVisible= false">OK</el-button>
      </span>
    </el-dialog>
    <el-dialog width="600px" :visible.sync="partUnitRelationVisible">
      <span slot="title"><i class="el-icon-info"></i> Unit: {{ unit_name }} </span>
      <el-transfer 
        v-model="value1" 
        :props="{
          key: 'id',
          label: 'number'
        }"
        :titles="['Part', 'Target']"
        :data="part_list">
      </el-transfer>
      <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="updatePartUnit">Confirm</el-button>
      </span> -->
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
  data() {
    const generateData = _ => {
      let uri = "parts/all/";
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
              number: data_raw[i-1].number,
            })
          }
      });
      return data;
    }
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
      unitDetail:[],
      partList:[],
      parts:[],
      partsList:[],
      partListForUnit:false,
      partUnitRelationVisible:false,
      howToDialogVisible:false,
      unit_name:"",
      part_list:generateData(),
      value1:[],
      partLoading:false,
    };
  },
  components: {
    UnitForm,
  },
  methods: {
    fetchItems() {
      let uri = "unit/";
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
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchItems();
    },
    fetchUnitDetail(a,b){
      this.partListForUnit=true;
      this.partLoading=true;
      let uri="unit/"+b.id+"/";
      this.parts=[];
      let promises=[];
      this.$http.get(uri)
      .then(response => {
        this.unitDetail=response.data;
        this.partList=response.data.parts;
        for (let i =0;i<this.partList.length;i++) {
          promises.push(this.$http.get("parts/"+this.partList[i]));
        };
        this.$http.all(promises)
        .then(this.$http.spread((...responses) => {
          responses.forEach((response) => {
            this.parts.push(response.data);
            this.partLoading=false;
          })
        }))
      })
    },
    showUnitPartsRelation(a,b){
      this.partUnitRelationVisible=true;
      let uri="unit/"+b.id+"/";
      this.$http.get(uri)
      .then(response => {
        this.value1=response.data.parts
      })
    },
    // editUnitPartsRelation(a,b){
    //   this.partUnitRelationVisible=true;
    //   let uri="unit/"+b.id+"/";
    //   this.$http.get(uri)
    //   .then(response => {

    //   })
    //   let promises=[];
    //   this.$http.get(uri)
    //   .then(response => {
    //     this.unitDetail=response.data;
    //     this.partList=response.data.parts;
    //     for (let i =0;i<this.partList.length;i++) {
    //       promises.push(this.$http.get("parts/"+this.partList[i]));
    //     };
    //     this.$http.all(promises)
    //     .then(this.$http.spread((...responses) => {
    //       responses.forEach((response) => {
    //         this.parts.push(response.data);
    //         this.partLoading=false;
    //       })
    //     }))
    //   })
    // },
    closeDialog(){
      this.dialogFormVisible=false;
      this.fetchItems();
    }
  },
  created: function() {
    this.fetchItems();
  }
};
</script>