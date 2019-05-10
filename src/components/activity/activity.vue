<template>
   <div>
      <table></table>
      <index></index>
      <mt-header title="活动"></mt-header>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
               <span class="mui-icon-extra mui-icon-extra-gift"></span>
               <div class="mui-media-body">拼手气</div>
            </router-link>
         </li>
         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
               <span class="mui-icon-extra mui-icon-extra-rank"></span>
               <div class="mui-media-body">凭实力</div>
            </router-link>
         </li>
         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
               <span class="mui-icon-extra mui-icon-extra-classroom"></span>
               <div class="mui-media-body">影游互动</div>
            </router-link>
         </li>
      </ul>
      <div id="card">
         <div class="mui-card" v-for="(item, i) in list" :key="i">
            <div class="mui-card-header mui-card-media" >
               <router-link to="">
                  <img :src="`http://127.0.0.1:3000/${item.img_url}`" alt="">
               </router-link>
            </div>
            <div class="mui-card-content">
               <div class="mui-card-content-inner">
                  <p v-text="item.atitle"></p>
               </div>
               <div class="my-badge">
                  <p class="mui-icon-extra mui-icon-extra-outline badgeLeft" v-text="item.atime"></p>
                  <p class="mui-icon mui-icon-eye badgeRight">{{item.att}}人关注</p>
               </div>
            </div>
            <!-- <div></div> -->
            <!-- <div class="mui-card-footer">
               <p class="mui-card-link">Like</p>
               <p class="mui-card-link">Read more</p>
            </div> -->
         </div>
      </div>
   </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
   data(){
      return {
         list:{},
      }
   },
   created() {
      this.load();
      this.$store.state.num=2;
   },
   methods: {
      load(){
         this.axios.get('http://127.0.0.1:3000/active/').then(res=>{
            this.list=res.data.data;
         });
      }
   },
   components:{
      index,
   }
}
</script>
<style scoped>
.mint-header{
   background: #fff;
   color: #000;
   height: 45px;
   width: 100%;
   border-bottom: 1px solid #eee;
   position: fixed;
   z-index: 100;
}
.mui-grid-view.mui-grid-9{
   background: #fff;
   border: 0;
   margin-top: 45px;
   display: flex;
   justify-content: space-around;
   align-items: center;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border: 0;
}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon{
   font-size: 32px;
}
.mui-icon-extra{
   color: #e2c295;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
   color: #6a6a6a;
   font-size: 14px;
}
.mui-card-content-inner{
   padding: 10px;
}
.mui-card-content-inner p{
   margin: 0;
   color: #333;
}
.my-badge{
   clear: both;
   height: 25px;
}
.my-badge>p{
   padding: 0 10px;
   margin: 0;
   font-size: 12px;
}
.my-badge .badgeLeft{
   float: left;
   color: #e1c093;
}
.my-badge .badgeRight{
   float: right;
}
.mui-card .mui-card-header{
   padding: 9px;
   height:54vw;
}
.mui-card .mui-card-header img{
   /* width: 335px;
   height: 150px; */
   width: 100%;
   height: 100%;
   text-align: center;
}
#card{
   margin-bottom: 16vw;
}
</style>


