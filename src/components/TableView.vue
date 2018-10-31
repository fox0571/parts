<template>
  <el-table
    :data="cases"
    stripe
    style="width: 100%">
    <el-table-column
      prop="sksid"
      label="SKSID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="businessName"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="issue"
      label="Issue">
    </el-table-column>
  </el-table>
</template>


<script>

    export default {
        data(){
            return{
                cases: []
            }
        },
        
        methods: {
            
            fetchItems()
            {
              let uri = 'case/?format=json';
              this.$http.get(uri).then((response) => {
                  this.cases = response.data.results;
              });
            }
        },
        created: function()
        {
            this.fetchItems();
        }

        
    }
</script>