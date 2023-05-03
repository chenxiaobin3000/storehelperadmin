import Layout from '@/layout'

export default {
  path: '/product',
  component: Layout,
  name: 'product',
  meta: {
    title: '生产管理',
    roles: [600]
  },
  children: [{
    path: 'report', component: () => import('@/views/product/report'),
    name: 'product_report', meta: { title: '生产总览', roles: [601] }
  }, {
    path: 'getList', component: () => import('@/views/product/getList'),
    name: 'product_getList', meta: { title: '生产明细', roles: [602] }
  }, {
    path: 'process', component: () => import('@/views/product/process'),
    name: 'product_process', meta: { title: '生产出库', roles: [603] }
  }, {
    path: 'complete', component: () => import('@/views/product/complete'),
    name: 'product_complete', meta: { title: '生产入库', roles: [604] }
  }, {
    path: 'loss', component: () => import('@/views/product/loss'),
    name: 'product_loss', meta: { title: '生产损耗', roles: [605] }
  }]
}
