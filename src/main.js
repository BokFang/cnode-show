// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */

Vue.use(VueLazyload,{

})


Vue.filter('formatDate',(str)=>{
  if(!str) return''
  let date = new Date(str)
  let time = (new Date().getTime() - date.getTime())
  if(time < 0){
    return ''
  }else if((time/1000) < 30){
    return '刚刚'
  }else if((time/1000) < 60){
    return parseInt(time/1000) + '秒前'
  }else if((time/60000) < 60){
    return parseInt(time/60000) + '分钟前'
  }else if((time/3600000) < 24){
    return parseInt(time/3600000) + '小时前'
  }else if((time/86400000) < 30){
    return parseInt(time/86400000) + '天前'
  }else if((time/2592000000) < 12){
    return parseInt(time/2592000000) + '个月前'
  }else{
    return parseInt(time/32140800000) + '年前'
  }
})
Vue.filter('formatType',(post)=>{
  if(post.good == true){
    return "精华"
  }else if(post.top == true){
    return "置顶"
  }else if(post.tab == 'ask'){
    return "问答"
  }else if(post.tab == 'share'){
    return "分享"
  }else{
    return "招聘"
  }
})
new Vue({
  el: '#app',
  router,
  components:{ App },
  render: h => h(App)
})
