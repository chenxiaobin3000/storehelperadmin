import Layout from '@/layout'

const commodityRouter = {
  path: '/commodity',
  component: Layout,
  name: 'commodity',
  meta: {
    title: '商品管理',
    roles: [300]
  },
  children: [{
    path: 'report', component: () => import('@/views/commodity/report'),
    name: 'commodity_report', meta: { title: '销售数据', roles: [301] }
  }, {
    path: 'commodityList', component: () => import('@/views/commodity/commodityList'),
    name: 'commodity_commodityList', meta: { title: '商品列表', roles: [302] }
  }, {
    path: 'halfgoodList', component: () => import('@/views/commodity/halfgoodList'),
    name: 'commodity_halfgoodList', meta: { title: '半成品列表', roles: [303] }
  }, {
    path: 'originalList', component: () => import('@/views/commodity/originalList'),
    name: 'commodity_originalList', meta: { title: '原料列表', roles: [304] }
  }, {
    path: 'standardList', component: () => import('@/views/commodity/standardList'),
    name: 'commodity_standardList', meta: { title: '标品列表', roles: [305] }
  }, {
    path: 'destroyList', component: () => import('@/views/commodity/destroyList'),
    name: 'commodity_destroyList', meta: { title: '废料列表', roles: [306] }
  }, {
    path: 'setCategory', component: () => import('@/views/commodity/setCategory'),
    name: 'commodity_setCategory', meta: { title: '品类管理', roles: [307] }
  }, {
    path: 'attributeList', component: () => import('@/views/commodity/attributeList'),
    name: 'system_attributeList', meta: { title: '属性管理', roles: [308] }
  }]
}

export default commodityRouter
