const router = require('./router.js')
const view = require('./view.js')
const vuex = require('./vuex.js')


module.exports = function(plop){
    plop.setGenerator('router',router)
    plop.setGenerator('view',view)
    plop.setGenerator('vuex',vuex)
}