<template>
   <div>
      <myindex></myindex>
      <div id="film">
         <mt-swipe :auto="2000" :show-indicators="true">
            <mt-swipe-item v-for="(item, i) in list" :key="i">
               <router-link to="/fillProduct">
                  <img :src="`http://127.0.0.1:3000/${item.simg_url}`" alt="">
               </router-link>
            </mt-swipe-item>
         </mt-swipe>
         <div id="list" class="mui-slider">
            <div class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
               <a class="mui-control-item" @click="cardLeft" :class="ischeck==true?'mui_active1':''">正在热播</a>
               <a class="mui-control-item" @click="cardRight" :class="ischeck==false?'mui_active1':''">即将上映</a>
            </div>
            <div class="mui-slider-progress-bar mui-col-xs-6" :class="ischeck==false?'my_action':'my'"></div>
            <div class="mui-slider-group">
               <div :class="ischeck==true?'':'isshow'">
                  <card1></card1>
               </div>
               <div :class="ischeck==true?'isshow':''">
                  <card2></card2>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import myindex from '@/components/index/my-index.vue'
import card1 from '@/components/index/card1.vue'
import card2 from '@/components/index/card2.vue'
export default {
   data(){
      return {
         list:{},//轮播图
         isactive:true,
         active:'',
         ischeck:true,
      }
   },
   methods: {
      load(){
         this.axios.get('http://127.0.0.1:3000/swipe/').then(res=>{
            this.list=res.data.data;
         });
      },
      cardLeft(){
         this.ischeck=true;
      },
      cardRight(){
         this.ischeck=false;
      },
   },
   created() {
      this.load();
      this.$store.state.active='film';
   },
   components:{
      myindex,
      card1,
      card2,
   }
}
</script>
<style scoped>
.isshow{
   display: none;
}
#film{
   margin-top: 46px;
}
.app-container .mint-swipe{
   height: 46vw;
}
.app-container .mint-swipe img{
   width: 100%;
}
.mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-progress-bar{
   height: 2px;
   background: #000;
   border-radius: 10vw;
}
.mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-progress-bar[data-v-e1a89984]{
   width: 8vw;
   margin-left: 21%;
   /* transform: translateX(-50%); */
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
   color: rgb(136, 136, 136);
   background: #fff;
   font-size: 14px;
}
.mui-segmented-control.mui-segmented-control-inverted .mui_active1{
   transition: all 0.3s;
   font-size: 16px;
   color: #000;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
   color: #000;
   border: 0;
   background: #fff;
}
.my_action{
   transition: transform 0.3s;
   transform: translate3d(50vw, 0px, 0px) translateZ(0px);
}
.my{
   transition: transform 0.3s;
   transform: translate3d(0px, 0px, 0px) translateZ(0px);
}
</style>
