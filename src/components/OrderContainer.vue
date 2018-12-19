<template>
  <div class="header">
        <el-tabs v-model="tabs" type="border-card">
    <el-tab-pane
        v-for="item in tableTabs2"
        :key="item.name"
        :label="item.title"
        :name="item.name">
        <order-list
        :status="item.name">
        </order-list>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderList from './OrderList.vue';
export default {
    
  data() {
    return {
      tabsValue:'',
      tableTabs2: [{
          title: 'NEW',
          name: 'new',
          content: 'New Parts'
        }, {
          title: 'ORDERED',
          name: 'ordered',
          content: 'Ordered Parts'
        }, {
          title: 'SHIPPED',
          name: 'shipped',
          content: 'Shipped Out'
        }, {
          title: 'RECEIVED',
          name: 'received',
          content: 'Received'
        }],
      tabIndex:1
    };
  },
  components: {
    OrderList,
  },
};
</script>