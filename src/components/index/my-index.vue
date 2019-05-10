<template>
   <div id="index">
      <table></table>
      <index></index>
      <div class="header">
         <router-link to="/address" class="address">
            <div class="mui-icon mui-icon-back my-color">广州</div>
         </router-link>
         <div class="mui-segmented-control">
            <router-link to="/film" class="mui-control-item" :class="ischeck=='film'?'mui-active':''">影片</router-link>
            <router-link to="/cinema" class="mui-control-item" :class="ischeck=='cinema'?'mui-active':''">影院</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
   data(){
      return {
         ischeck:'',
      }
   },
   created() {
      this.$store.state.num=1;
      this.ischeck=this.$store.state.active;
   },
   components:{
      index,
   }
}
</script>
<style scoped>
#index{
   touch-action: none;
}
.header{
   position: fixed;
   height: 45px;
   width: 100%;
   z-index: 1000;
   background: #fff;
}
.address{
   position: absolute;
   top: 7px;
   z-index: 100;
}
.my-color{
   color: rgb(0, 0, 0);
   font-size: 15px;
   margin-top: 10px;
   margin-left: 10px;
}
.header .mui-segmented-control{
   border: 0;
   padding: 0 24vw;
   font-size: 14px;
   position: absolute;
   top: 0px;
   margin-top: 7px;
}
.header .mui-segmented-control .mui-control-item{
   color: #e2c295;
   line-height: 30px;
   border: 1px solid #e2c295;
}
.header .mui-segmented-control .mui-control-item:first-child{
   border-left: 1px solid #e2c295;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
}
.header .mui-segmented-control .mui-control-item:last-child{
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
}
.header .mui-segmented-control .mui-control-item.mui-active{
   color: #fff;
   background: #e2c295;
}
</style>