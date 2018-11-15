import TagView from '@/components/TagView.vue';
import TableView from '@/components/TableView.vue';
import UnitView from '@/components/UnitView.vue';
import RequestView from '@/components/RequestView.vue';


export default [
  {
    path: '/tag', component: TagView,
  },
  {
    path: '/inventory', component: TableView,
  },
  {
    path: '/unit', component: UnitView,
  },
  {
    path: '/request', component: RequestView,
  }
]
