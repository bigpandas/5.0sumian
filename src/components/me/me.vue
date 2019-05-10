<template>
   <div>
      <table></table>
      <index></index>
      <mt-header title="">
         <router-link to="/msg" slot="left">
            <span class="mui-icon-extra mui-icon-extra-notice"></span>
         </router-link>
         <router-link to="/set" slot="right">
            <span class="mui-icon mui-icon-gear"></span>
         </router-link>
      </mt-header>
      <div class="user">
         <div class="successLogin" :class="login=='success'?'':'isshow'">
            <router-link to="/userInfo">
               <div class="userhp">
                  <img :src="login=='success'?userhp:''" alt="">
               </div>
               <p v-text="user_name"></p>
               <p>{{user_phone | userPhoneFilter}}</p>
               <span class="vipClass">
                  <img src="@/img/bg_mine_2vipn2.png" alt="" value="">
               </span>
            </router-link>   
         </div>
         <div :class="login=='fail'?'':'isshow'">
            <router-link to="/login" class="login">
               <div class="login_top">
                  <img src="@/img/ic_avatar.png" alt="">
                  <p>注册/登录</p>
               </div>
               <div class="login_bottom">
                  <p>欢迎来到万达电影</p>
                  <p>“生活应万达电影更美好”</p>
               </div>
            </router-link>
         </div>
      </div>
      <div class="my-card">
         <ul>
            <li>
               <router-link :to="login=='success'?'/mylist':'/login'">
                  <img src="@/img/ic_order.png" alt="">
                  <p>我的订单</p>
               </router-link>
            </li>
            <li>
               <router-link :to="login=='success'?'/myWellet':'/login'">
                  <img src="@/img/ic_wallet.png" alt="">
                  <p style="margin-top:9px">我的钱包</p>
               </router-link>
            </li>
         </ul>
      </div>
      <div>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link :to="login=='success'?'/myvip':'/login'" class="mui-navigate-right">会员权益</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link :to="login=='success'?'/mytotal':'/login'" class="mui-navigate-right">积分商品</router-link>
               <span class="my-total" :class="login=='success'?'':'isshow'">0积分</span>
				</li>
			</ul>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link :to="login=='success'?'/myfillList':'/login'" class="mui-navigate-right">我的影单</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link :to="login=='success'?'/myaward':'/login'" class="mui-navigate-right">我的奖品</router-link>
				</li>
			</ul>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link to="/myservice" class="mui-navigate-right">客服中心</router-link>
				</li>
			</ul>
      </div>
   </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
   data(){
      return {
         login:'fail',
         user_phone:'',
         userhp:'',
         user_name:''
      }
   },
   methods: {
      load(){
         if(sessionStorage.getItem('id')){
            this.login='success';
            this.user_phone=sessionStorage.getItem('phone');
            this.user_name=sessionStorage.getItem('name');
            // console.log(sessionStorage.getItem('id'))
         }else{
            this.login='fail';
         }
      }
   },
   created(){
      this.$store.state.num=4;
      this.load();
      this.userhp=`http://127.0.0.1:3000/${sessionStorage.getItem('userhp')}`
   },
   components:{
      index,
   },
}
</script>
<style scoped>
.mint-header{
   background: #444;
   color: #eee;
   position: fixed;
   width: 100%;
   z-index: 100;
   height: 45px;
}
.user{
   margin-top: 40px;
   padding-top: 20px;
   padding-bottom: 20px;
   background-image: linear-gradient(top,#444 0%,#555 100%);
   position: relative;
   text-align: center;
   clear: both;
   /* height: 145px; */
}
.user p{
   margin: 0;
   padding: 0;
   color: #fff;
   text-align: center;
}
.user .isshow{
   display: none;
}
.mui-table-view .mui-table-view-cell .isshow{
   display: none;
}
.user .login{
   display: flex;
   justify-content: center;
   align-items: center;
}
.user div.login_top{
   margin-right: 3vw;
}
.user div.login_top>img{
   width: 8vw;
}
.user div.login_top>p{
   font-size: 2vw;
   color: rgb(184, 184, 184);
}
.user div.login_bottom>p:first-child{
   font-size: 4.5vw;
}
.user div.login_bottom>p:last-child{
   font-size: 2vw;
   margin-top: 2vw;
}
.successLogin p{
   font-size: 3vw;
   height: 4.5vw;
   line-height: 4.5vw;
}
.userhp>img{
   width: 10vw;
   border-radius: 50%;
}
.vipClass{
   position: absolute;
   float: left;
   font-size: 9px;
   color: #000;
   top: 67%;
   left: 63%;
}
.vipClass>img{
   width: 16vw;
   height: 4vw
}
.my-card{
   margin-bottom: 15px;
}
.my-card>ul{
   margin: 0;
   padding: 0;
   list-style: none; 
   background: #fff;
   height: 30vw;
   display: flex;
   justify-content: center;
   align-items: center;
}
.my-card>ul>li{
   width: 50%;
   padding: 12px 30px;
   text-align: center;
   margin-top: 20px;
   margin-bottom: 20px;
}
.my-card>ul>li>img{
   width: 13vw;
   margin-top: -5px;
}
.my-card>ul>li:first-child{
   border-right: 1px solid #ddd;
}
.my-card>ul>li>p{
   padding: 0;
   margin: 0;
   font-size: 12px; 
   color: #414141;
}
.mui-table-view{
   margin-top: 10px;
   margin-top: 10px;
}
.mui-table-view:after{
   content: ''
}
.mui-table-view .mui-table-view-cell{
   position: relative;
   padding: 11px 15px 11px 10px;
   border-bottom: 1px solid #ececec;
}
.mui-table-view-cell:after{
   content: '';
   background: none;
}
.mui-table-view-cell > a:not(.mui-btn)+span.my-total{
   position: absolute;
   top: 27%;
   right: 8%;
   color: #bababa;
   font-size: 12px;
}
.mui-table-view-cell > a:not(.mui-btn){
   font-size: 14px;
   padding-left: 30px;
   color: #414141;
}
</style>