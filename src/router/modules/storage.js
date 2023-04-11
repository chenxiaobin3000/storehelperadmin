import Layout from '@/layout'

export default {
  path: '/storage',
  component: Layout,
  name: 'storage',
  meta: {
    title: '仓储管理',
    roles: [800]
  },
  children: [{
    path: 'report', component: () => import('@/views/storage/report'),
    name: 'storage_report', meta: { title: '仓储总览', roles: [801] }
  }, {
    path: 'getList', component: () => import('@/views/storage/getList'),
    name: 'storage_getList', meta: { title: '仓储明细', roles: [802] }
  }, {
    path: 'purchase', component: () => import('@/views/storage/purchase'),
    name: 'storage_purchase', meta: { title: '进货录入', roles: [803] }
  }, {
    path: 'return', component: () => import('@/views/storage/return'),
    name: 'storage_return', meta: { title: '退货录入', roles: [804] }
  }, {
    path: 'dispatch', component: () => import('@/views/storage/dispatch'),
    name: 'storage_dispatch', meta: { title: '调度录入', roles: [805] }
  }, {
    path: 'loss', component: () => import('@/views/storage/loss'),
    name: 'storage_loss', meta: { title: '损耗录入', roles: [806] }
  }, {
    path: 'offline', component: () => import('@/views/storage/offline'),
    name: 'storage_offline', meta: { title: '线下销售', roles: [807] }
  }, {
    path: 'back', component: () => import('@/views/storage/back'),
    name: 'storage_back', meta: { title: '线下退货', roles: [808] }
  }]
}
