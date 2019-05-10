import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import axios from 'axios'
import store from '@/store.js'
// import mui from '@/lib/mui/js/mui.js'


Vue.config.productionTip = false

//让axios的请求携带验证信息到服务端,配置跨域访问保存session中数据
axios.defaults.withCredentials=true;
//给Vue原型对象添加axios
Vue.prototype.axios=axios;
// Vue.prototype.mui=mui;


//全局引入mint-ui组件
import MintUI from 'mint-ui'
Vue.use(MintUI);

//创建时间过滤器
Vue.filter("datetimeFilter",(val)=>{
  var now = new Date(val);
  var date=now.getDate();
  var month=now.getMonth()+1;
  //如果日期或月份是单位数，前面加0
  date<10&&(date="0"+date);//如果&&前是true，才执行&&后面的表达式
  month<10&&(month="0"+month);
  return `${month}月${date}日`;
})
//创建用户联系方式过滤器
Vue.filter("userPhoneFilter",(val)=>{
  var str1 = val.slice(3,-4);
  var str = val.replace(str1,'****');
  return str;
})
//创建性别过滤器
Vue.filter("sexFilter",(val)=>{
  if(val==1||val=='男'){
    return '男';
  }
  if(val==0||val=='女'){
    return '女';
  }
})
//创建用户生日过滤器
Vue.filter("brithdayFilter",(val)=>{
  var year=val.slice(0,4);
  var mouth=val.slice(4,6);
  var date=val.slice(6,8);
  return `${year}-${mouth}-${date}`;
})

new Vue({
  router,
  store,
  render: h => h(App)//创建
}).$mount('#app')//挂载
