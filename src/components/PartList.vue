<template>
  <div class="part">
    <el-table
    border
    :data="filteredData"
    style="width: 100%">
    <el-table-column
        type="index"
        width="40">
    </el-table-column>
    <el-table-column
        prop="number"
        sortable
        label="Part Number"
        width="120">
    </el-table-column>
    <el-table-column
        prop="name_eng"
        sortable
        label="Description"
        width="180">
    </el-table-column>
    <el-table-column
        prop="weight"
        label="Weight">
    </el-table-column>
    <el-table-column
        prop="price_list"
        sortable
        label="List Price">
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array,
      filterKey: String
    },
    computed: {
      filteredData: function () {
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var data = this.data
        if (filterKey) {
            data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
            })
        }
        return data
        }
    },
  }
</script>