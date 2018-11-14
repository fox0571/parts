<template>
  <div>
  <vuetable ref="vuetable"
    api-url="http://192.168.5.130/api/parts/?format=json"
    :fields="['number','name_eng','inventory','price_list']"
    data-path="data"
    pagination-path=""
    @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage">
    </vuetable-pagination>
  </div>
</template>


<script>
  export default {
    components:{
      vuetable,
      'vuetable-pagination':Vuetable.VuetablePagination
    },
    methods:{
      onPaginationData(paginationData){
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage(page){
        this.$refs.vuetable.changePage(page)
      }
    }
  }
</script>
