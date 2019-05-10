<template>
   <div>
      <table></table>
      <index></index>
      <div class="my-header">
         <mt-header title="广州万达海珠佳永广场"></mt-header>
         <span class="my-badge mui-icon mui-icon-arrowdown"></span>
      </div>
      <div class="vip">
         <div class="mui-card">
            <div class="mui-card-header">
               <p>会员卡</p>
               <p>
                  <router-link to="/lookMose" style="color: #8f8f94">查看更多></router-link>
               </p>
            </div>
            <div class="mui-card-content">
               <div class="mui-card-content-inner">
                  <div>
                     <ul class="vipcard">
                        <li>
                           <img src="img/bg_cards_gld.png" alt="">
                           <p>至尊卡-爆宝Plus版</p>
                        </li>
                        <li>
                           <img src="img/bg_cards_blk.png" alt="">
                           <p>至尊卡-爆宝版</p>
                        </li>
                        <li>
                           <img src="img/bg_card_count.png" alt="">
                           <p>至尊卡(全国通用)</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="total">
         <div class="mui-card">
            <div class="mui-card-content">
               <div class="mui-card-content-inner">
                  <img src="img/total.jpg" alt="">
               </div>
            </div>
         </div>
         <div class="mui-card" style="margin-top: 10px">
            <div class="mui-card-content">
               <div class="mui-card-content-inner">
                  <img src="img/banner_intergral_mall.png" alt="">
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
   data(){
      return {}
   },
   components:{
      index,
   },
   created(){
      this.$store.state.num=3;
   }
}
</script>
<style scoped>
.my-header{
   position: fixed;
   z-index: 100;
   width: 100%;
}
.mint-header{
   background: #fff;
   color: #000;
   height: 45px;
   width: 100%;
   border-bottom: 1px solid #eee;
}
.my-badge{
   position: absolute;
   top: 50%;
   left: 70%;
   margin-top: -12px;
   color: #000;
}
.vip .mui-card{
   margin: 45px 0 10px 0;
}
.vip .mui-card p{
   margin: 0;
}
.vip .mui-card-header>p{
   font-size: 12px;
}
.vip .mui-card-content-inner{
   padding-bottom: 0px;
}
.vip .mui-card-content-inner>div{
   overflow: auto;
   height: 140px;
   /* position: relative; */
}
.vip .mui-card-content ul.vipcard{
   list-style: none;
   display: flex;
   justify-content: flex-start;
   padding-left: 0px;
   margin-top: 0px;
   margin-bottom: 10px;
   /* overflow-x: scroll;
   overflow-y: hidden;
   position: absolute;
   top: 0;
   left: 0; */
}
.vip .mui-card-content ul.vipcard>li{
   float: left;
   margin: 0 20px;
}
.vip .mui-card-content ul.vipcard img{
   width: 40vw;
}
.total .mui-card{
   margin: 0;
}
.total .mui-card-content-inner img{
   width: 100%;
   border-radius: 4px;
}
</style>