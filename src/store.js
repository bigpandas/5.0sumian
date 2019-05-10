import Vue from 'vue'
import Vuex from '../node_modules/vuex'

Vue.use(Vuex);

const store =new Vuex.Store({
   state:{
      num:1,
      active:'film',
      filmPro:[],
   },
   //修改数据函数
   mutations:{
      setfilmPro(state,val){
         state.filmPro=val;
      }
   },
   //获取数据函数
   getters:{
      getfilmPro(state){
         return state.filmPro;
      }
   }
})

export default store;