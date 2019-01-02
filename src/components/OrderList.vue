<template>
  <div class="table" >
    <el-table
      v-loading="loading"
      border
      :data="orders"
      style="width: 60%"
      @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        type="index"
        width="40">
      </el-table-column>
      <el-table-column
        prop="part.number"
        sortable
        label="Number"
        width="180">
      </el-table-column>
      <el-table-column
        prop="part.name_eng"
        sortable
        label="Description">
      </el-table-column>
      <el-table-column
        prop="qty"
        sortable
        label="Quantity">
      </el-table-column>
      <el-table-column
        prop="branch"
        sortable
        label="Branch">
      </el-table-column>
      <el-table-column
        prop="ordered_time"
        sortable
        label="Ordered Date">
      </el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="updateStatus()">Place</el-button>
    <el-button type="primary" size="small" @click="csvExport(multipleSelection)">Get List</el-button>
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

export default {
  props: {
    status:String
  },
  data() {
    return {
      orders: [],
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
      unit_name:"",
      value1:[],
      searchQuery: '',
      multipleSelection: [],
    };
  },
  methods: {
    // getModel(id){
    //   this.$http.get("unit/"+id+"/")
    //   .then(response => {
    //     //console.log(response.data.model)
    //     this.unit_name=response.data.model
    //   })
    // },
    csvExport(arrData) {
      let data=arrData
      //console.log(data)
      let csvContent = "data:text/csv;charset=utf-8,";
      let OrderHeader="PART NUMBER,ENGLISH NAME,QUANTITY,APPLY FOR,BRANCH,REMARK\n"
      csvContent += OrderHeader
      for (var i=0;i<data.length;i++){
        var row="";
        row+=(data[i].part.number+",");
        //console.log(row);
        let name=data[i].part.name_eng.split(",").join("_");
        row+=(name+","+data[i].qty+",");
        //console.log(data[i].parts)
        let models=data[i].part.unit_set[0].model
        row+=(models+","+data[i].branch+"\n")
        csvContent += row
      }
      const datas = encodeURI(csvContent);
      const link = document.createElement("a");
      let filename="PARTS_ORDER_"
      let date=new Date()
      let month=date.getMonth()
      let day=date.getDate()
      let year=date.getFullYear()
      filename+=month+"_"+day+"_"+year+".csv"
      link.setAttribute("href", datas);
      link.setAttribute("download", filename);
      link.click();
    },
    fetchItems() {
      let st=this.status
      let uri = "po/"+st;
      this.loading = true;
      this.$http
        .get(uri, {
          params: {
            page: this.currentPage,
            search: this.filters.name,
          }
        })
        .then(response => {
          this.orders = response.data.results;
          this.total = response.data.count;
          this.loading = false;
        });
    },
    updateStatus(){
      let OrderList=this.multipleSelection;
      let promises=[];
      for (var i=0;i<OrderList.length;i++){
        let date= new Date()
        let para={'status': '1','ordered_time':date}
        let URL="po/"+OrderList[i].id+"/"
        promises.push(this.$http.patch(URL,para));
      }
      this.$http.all(promises).then(response => {
        console.log("success!")
      })
    },
    handleCurrentChange: function(val) {
        this.currentPage = val;
        this.fetchItems();
    },
    closeDialog(){
      this.dialogFormVisible=false;
      this.fetchItems();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      //console.log(val);
    }
  },
  created: function() {
    this.fetchItems();

  }
};
</script>