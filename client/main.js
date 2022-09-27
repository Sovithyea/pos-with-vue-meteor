import Vue from 'vue'

import '../imports/ui/plugins'
import router from '../imports/ui/routes'
import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
    router
  })
})
