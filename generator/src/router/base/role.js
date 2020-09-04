
const base= {
  path:'/role',
  name:'role',
  component:() => import(/* webpackChunkName: "role" */ '@、views/base/role.vue'),
  meta: {
    title: 'juese'
  }
}

export default base