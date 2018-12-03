import TagView from '@/components/TagView.vue';
import TableView from '@/components/TableView.vue';
import UnitView from '@/components/UnitView.vue';
import RequestView from '@/components/RequestView.vue';


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
]
