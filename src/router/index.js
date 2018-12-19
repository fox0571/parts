import TagView from '@/components/TagView.vue';
import TableView from '@/components/TableView.vue';
import UnitView from '@/components/UnitView.vue';
import RequestView from '@/components/RequestView.vue';
import OrderList from '@/components/OrderList.vue';
import OrderContainer from '@/components/OrderContainer.vue'


export default [
  {
    path: '/units', component: UnitView,
  },
  {
    path: '/parts', component: TableView,
  },
  {
    path: '/tags', component: TagView,
  },
  // {
  //   path: '/request', component: RequestView,
  // }

  {
    path: '/pos', component: OrderContainer,
  },
]
