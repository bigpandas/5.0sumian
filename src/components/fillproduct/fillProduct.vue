<template>
   <div>
      <div id="container">
         <mt-header title="电 影">
            <router-link to="/film" slot="left">
               <span class="mui-icon mui-icon-back"></span>
            </router-link>
            <router-link to="/film" slot="right">
               <span class="mui-icon mui-icon-redo"></span>
            </router-link>
         </mt-header>
         <div class="top">
            <div class="img">
               <img :src="`http://127.0.0.1:3000/${listFilm.img_url}`" alt="">
            </div>
            <div class="content">
               <div>
                  <h4 v-text="listFilm.lname"></h4>
                  <p>P Storm</p>
               </div>
               <div>
                  <p>
                     <span v-text="listFilm.ltype"></span>
                     <span class="gade">CGS 中国巨幕</span>
                  </p>
                  <p v-text="listFilm.address"></p>
                  <p>{{listFilm.ltime}}大陆上映</p>
               </div>
               <div>
                  <p>
                     <span class="num">161080</span>
                     <span>人想看</span>
                  </p>
               </div>
            </div>
         </div>
         <div class="center">
            <div class="centerLeft">
               <div>
                  <img src="@/img/ic_launcher_round.png" alt="">
                  <p style="margin-top:-7px">口碑</p>
               </div>
               <div>
                  <div class="mt-progress">
                     <div>9-10分</div>
                     <div class="mt-progress-content">
                        <div class="mt-progress-runway" style="height: 3px;"></div>
                        <div class="mt-progress-progress" style="width: 80.36%; height: 3px;"></div>
                     </div> 
                     <div>80.36%</div>
                  </div>
                  <div class="mt-progress">
                     <div>5-8分</div>
                     <div class="mt-progress-content">
                        <div class="mt-progress-runway" style="height: 3px;"></div>
                        <div class="mt-progress-progress" style="width: 15.82%; height: 3px;"></div>
                     </div> 
                     <div>15.82%</div>
                  </div>
                  <div class="mt-progress">
                     <div>1-4分</div>
                     <div class="mt-progress-content">
                        <div class="mt-progress-runway" style="height: 3px;"></div>
                        <div class="mt-progress-progress" style="width: 3.82%; height: 3px;"></div>
                     </div> 
                     <div>3.82%</div>
                  </div>
               </div>
            </div>
            <div class="centerRight">
               <p class="my-total">评分</p>
               <p>
                  <span class="my-count">{{listFilm.score}}</span>
                  <img src="@/img/ic_score_wanda_selected.png" alt="">
                  <img src="@/img/ic_score_wanda_selected.png" alt="">
                  <img src="@/img/ic_score_wanda_selected.png" alt="">
                  <img src="@/img/ic_score_wanda_selected.png" alt="">
                  <img src="@/img/ic_score_wanda_half.png" alt="">
               </p>
               <p>
                  <span>242786 </span>
                  <span class="mui-icon mui-icon-arrowright"></span>
               </p>
            </div>
         </div>
         <div class="bottom">
            <div @click="love">
               <span class="mui-icon-extra mui-icon-extra-heart-filled" :class="islove==true?'my-action':''"></span>
               <span style="margin-left:5px">想看</span>
            </div>
            <div>
               <span class="mui-icon mui-icon-starhalf"></span>
               <span style="margin-left:5px">看过</span>
            </div>
         </div>
      </div>
      <div id="product">
         <div :class="down==true?'my_down':''">
            <span v-text="listFilm.lpud"></span>
         </div>
         <div class="btn" @click="change">
            <span class="mui-icon" :class="icon==true?'mui-icon-arrowdown':'mui-icon-arrowup'"></span>
         </div>
      </div>
      <div id="active">
         <div>
            <span>演职人员</span>
         </div>
         <div class="fillActive">
            <ul>
               <li v-for="(item,i) of listActor" :key="i">
                  <img :src="`http://127.0.0.1:3000/${listFilm.img_url}`" alt="">
                  <p class="activeName ell" v-text="item"></p>
                  <p>饰:{{listPlayActor[i]}}</p>
               </li>
            </ul>
         </div>
      </div>
      <div id="fillVideo">
         <div>
            <span>视频剧情</span>
         </div>
         <div class="fillActive">
            <ul>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
               <li>
                  <img src="img/video-gutianl.jpg" alt="">
               </li>
            </ul>
         </div>
      </div>
      <div id="discussion">
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="discussion_Title">
                     <p>短评</p>
                     <span>写短评</span>
                  </div>
                  <div class="discussion_label">
                     <span @click="onall" :class="ischanger.all==true?'my-action':''">全部</span>
                     <span @click="ongood" :class="ischanger.good==true?'my-action':''">
                        好评
                        <i>{{listFilm.gool}}</i>
                     </span>
                     <span @click="onshort" :class="ischanger.short==true?'my-action':''">
                        差评
                        <i>{{listFilm.fail}}</i>
                     </span>
                     <span @click="oninpick" :class="ischanger.inpick==true?'my-action':''">
                        点映
                        <i>{{listFilm.opens}}</i>
                     </span>
                     <span @click="onbuy" :class="ischanger.buy==true?'my-action':''">
                        购票
                        <i>{{listFilm.shopticket}}</i>
                     </span>
                     <span @click="onact" :class="ischanger.act==true?'my-action':''">
                        认证作者
                        <i>{{listFilm.active}}</i>
                     </span>
                     <span @click="onadd" :class="ischanger.add==true?'my-action':''">
                        同城
                        <i>{{listFilm.local}}</i>
                     </span>
                  </div>
					</div>
				</div>
			</div>
         <div class="mui-card" v-for="(item, i) in listDis" :key="i" :class="isLogin==false?'isshow':''">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                  <div class="user">
                     <div class="user_portrait">
                        <img :src="isLogin==true?userhp:''" alt="">
                     </div>
                     <div class="user_content">
                        <div class="user_name">
                           <span v-text="userName"></span>
                           <span class="mui-icon mui-icon-more"></span>
                        </div>
                        <div class="user_total">
                           <img src="@/img/ic_score_wanda_selected.png" alt="">
                           <img src="@/img/ic_score_wanda_selected.png" alt="">
                           <img src="@/img/ic_score_wanda_selected.png" alt="">
                           <img src="@/img/ic_score_wanda_selected.png" alt="">
                           <img src="@/img/ic_score_wanda_selected.png" alt="">
                           <span v-text="`${item.total}分`"></span>
                        </div>
                        <div class="user_discussion">
                           <p v-text="item.discussion"></p>
                        </div>
                        <div class="user_time">
                           <span>{{item.dtime | datetimeFilter}}</span>
                           <div>
                              <span class="mui-icon-extra mui-icon-extra-heart" @click="like" :class="islike==true?'my-action':''" v-text="item.love"></span>
                              <span class="mui-icon mui-icon-chatbubble">144</span>
                           </div>
                        </div>
                     </div>
                  </div>
					</div>
				</div>
			</div>
         <div class="notLogin" :class="isLogin==true?'isshow':''">
            <p>您还没登录哦！</p>
         </div>
      </div>
      <div id="floot">
         <div>
            <p>特惠购票</p>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return {
         down:true,
         icon:true,
         islove:false,
         islike:false,
         ischanger:{
            all:true,
            good:false,
            short:false,
            inpick:false,
            buy:false,
            act:false,
            add:false,
         },
         userName:'',
         userhp:'',
         listDis:{},
         isLogin:true,
         listFilm:{},
         listActor:[],
         listPlayActor:[],
      }
   },
   methods:{
      load(){
         this.axios.get('http://127.0.0.1:3000/userDis/').then(res=>{
            this.listDis=res.data.dis;
         })
      },
      change(){
         if(this.down){
            this.down=false;
            this.icon=false;
         }else{
            this.down=true;
            this.icon=true;
         }
      },
      love(){
         if(this.islove){
            this.islove=false;
         }else{
            this.islove=true;
         }
      },
      like(){
         if(this.islike){
            this.islike=false;
         }else{
            this.islike=true;
         }
      },
      onall(){
         this.ischanger={
            all:true,
            good:false,
            short:false,
            inpick:false,
            buy:false,
            act:false,
            add:false,
         }
      },
      ongood(){
         this.ischanger={
            all:false,
            good:true,
            short:false,
            inpick:false,
            buy:false,
            act:false,
            add:false,
         }
      },
      onshort(){
         this.ischanger={
            all:false,
            good:false,
            short:true,
            inpick:false,
            buy:false,
            act:false,
            add:false,
         }
      },
      oninpick(){
         this.ischanger={
            all:false,
            good:false,
            short:false,
            inpick:true,
            buy:false,
            act:false,
            add:false,
         }
      },
      onbuy(){
         this.ischanger={
            all:false,
            good:false,
            short:false,
            inpick:false,
            buy:true,
            act:false,
            add:false,
         }
      },
      onact(){
         this.ischanger={
            all:false,
            good:false,
            short:false,
            inpick:false,
            buy:false,
            act:true,
            add:false,
         }
      },
      onadd(){
         this.ischanger={
            all:false,
            good:false,
            short:false,
            inpick:false,
            buy:false,
            act:false,
            add:true,
         }
      },
      splitActive(str){
         return str.split("/");
      }
   },
   created() {
      this.load();
      this.userName=sessionStorage.getItem('name');
      this.userhp=`http://127.0.0.1:3000/${sessionStorage.getItem('userhp')}`;
      if(this.userName){
         this.isLogin=true;
      }else{
         this.isLogin=false;
      }
      this.listFilm=this.$store.getters.getfilmPro;
      this.listActor=this.splitActive(this.listFilm.actor);
      this.listPlayActor=this.splitActive(this.listFilm.playactor);
      // console.log(this.listFilm);
      // console.log(this.listActor);
      // console.log(this.listPlayActor);
   },
}
</script>
<style scoped>
.mint-header{
   background-color: transparent;
}
#container{
   /* margin-top: 40px; */
   background-image: linear-gradient(top,#3b4e55 0%,#101b1d 100%);
}
#container div.top{
   display: flex;
   justify-content: flex-start;
   align-items: center;
}
#container div.top h4,#container div.top p{
   padding: 0;
   margin: 0;
   color: #f9f9f9;
   font-weight: 200;
   font-size: 4.5vw;
}
#container div.top h4{
   height: 5vw;
}
#container div.top p{
   color: #b5b5b5;
   font-size: 2vw;
   height: 4vw;

}
#container div.top img{
   width: 27vw;
   height: 35vw;
   margin-right: 3vw;
   margin-left: 3vw;
}
#container div.top .content{
   width: 73vw;
   height: 35vw;
}
#container div.top .content>div:nth-child(2){
   margin-top: 2.5vw;
   margin-bottom: 2.5vw
}
#container div.top .content span.gade{
   background: rgba(120,120,120,0.5);
   border-radius: 5px;
   margin-left: 13px;
   color: #d6d6d6;
   padding: 3px;
}
#container div.top .content span.num{
   color: #e2c295;
   font-size: 3.5vw;
   margin-right: 3px;
}
#container div.center{
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 3vw;
}
#container div.center .centerLeft{
   width: 64vw;
   height: 15vw;
   background: rgba(120,120,120,0.3);
   margin-right: 3vw;
   display: flex;
   justify-content: space-around;
   align-items: center;
}
#container div.center .centerLeft>div:first-child{
   padding: 3vw 3vw;
   height: 15vw;
   text-align: center;
   border-right: 1px solid #ddd;
}
#container div.center .centerLeft>div:first-child>p{
   color: #dfdfdf;
   font-size: 2vw;
   margin:0;
   padding: 0;
}
#container div.center .centerLeft>div:first-child>img{
   width: 6vw;
   
}
#container div.center .centerLeft>div:last-child{
   text-align: center;
   padding: 1vw 2vw;
}
#container div.center .centerLeft .mt-progress{
   height: 4vw;
   width: 45vw;
   line-height: 5vw;
}
#container div.center .centerLeft .mt-progress>div{
   font-size: 2vw;
   color: #dfdfdf;
}
#container div.center .centerLeft .mt-progress .mt-progress-runway{
   background: rgba(240,240,240,0.2);
   border-radius: 5vw;
}
#container div.center .centerLeft .mt-progress .mt-progress-progress{
   background: #e2c295;
   border-radius: 5vw;
}
#container div.center .centerLeft .mt-progress>div:nth-child(1){
   width: 10vw;
   margin-right: 0.1vw;
}
#container div.center .centerLeft .mt-progress>div:nth-child(3){
   width: 10vw;
   margin-left: 2vw;
}
#container div.center .centerRight{
   width: 25vw;
   height: 15vw;
   background: rgba(120,120,120,0.3);
   padding: 1vw 3vw;
}
#container div.center .centerRight p{
   font-size: 2vw;
   margin: 0;
   padding: 0;
   height: 4vw;
}
#container div.center .centerRight span{
   font-size: 2vw;
}
#container div.center .centerRight img{
   width: 3vw;
   margin-right: -0.5vw;
}
#container div.center .centerRight p.my-total{
   color: #fff;
   font-weight: 600;
   margin-top: 0.5vw;
}
#container div.center .centerRight span.my-count{
   color: #e2c295;
   font-size: 4vw;
}
#container div.bottom{
   display: flex;
   justify-content: center;
   align-items: center;
   padding-bottom: 2vw;
}
#container div.bottom>div{
   background: rgba(120,120,120,0.3);
   color: #fff;
   padding: 1vw 15vw;
   margin-left: 1vw;
   margin-right: 1vw;
   border-radius: 7px;
   height: 7vw;
   width: 45.7vw;
   text-align: center;
   line-height: 6vw;
}
#container div.bottom>div span{
   font-size: 3vw;
}
#container div.bottom>div span.mui-icon-starhalf{
   font-size: 4vw;
}
.my-action{
   color: #d91212;
}
#product{
   background: #f2f2f2;
   padding: 3vw 2vw 0 2vw;
}
#product :first-child{
   overflow: hidden;
}
.my_down{
   height: 15vw;
}
#product span{
   color: #000;
   font-size: 2vw;
}
#product .btn{
   height: 4vw;
   width: 101vw;
   margin-left: -3vw;
   margin-right: -3vw;
   background: #fcfcfc;
   text-align: center;
}
#product .btn .mui-icon{
   font-size: 4vw;
}
#active{
   margin-top: 3vw;
   padding: 2vw 2vw 0 2vw;
   background: #fff;
}
#active span{
   font-size: 3.5vw;
}
#active p{
   margin: 0;
   padding: 0;
}
#active .fillActive{
   overflow: auto;
   margin-top: 2vw;
   padding-bottom: 2vw;
}
#active .fillActive>ul{
   list-style: none;
   /* height: 44vw; */
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: flex-start;
}
#active .fillActive>ul>li{
   float: left;
   margin-right: 3vw;
   text-align: center;
}
#active .fillActive>ul>li p{
   font-size: 2vw;
   color: #000;
   padding: 0;
   /* height: 4.5vw;
   line-height: 4vw; */
   margin-top: 0vw;
}
#active .fillActive>ul>li p.activeName{
   width: 22vw;
}
#active .fillActive>ul>li p.activeName+p{
   color: #857c7c;
}
#active .fillActive>ul img{
   width: 22vw;
}
#fillVideo{
   margin-top: 3vw;
   padding: 2vw 2vw 0 2vw;
   background: #fff;
}
#fillVideo span{
   font-size: 3.5vw;
}
#fillVideo .fillActive{
   overflow: auto;
   margin-top: 2vw;
}
#fillVideo .fillActive>ul{
   list-style: none;
   height: 23vw;
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: flex-start;
}
#fillVideo .fillActive>ul>li{
   float: left;
   margin-right: 3vw;
   text-align: center;
}
#fillVideo .fillActive>ul img{
   width: 33vw;
   height: 20vw;
}
#discussion{
   margin-bottom: 10vw;
}
#discussion .mui-card{
   margin: 0;
}
#discussion .mui-card:first-child{
   margin-top: 2vw;
   border-bottom: 1px solid #ddd;
}
#discussion .mui-card p{
   margin: 0;
   padding: 0;
   color: #000;
   font-size: 3vw;
}
#discussion .mui-card:first-child span{
   padding: 0.9vw 3vw;
   /* background: rgba(120,120,120,0.3); */
   border: 1px solid #ddd;
   border-radius: 10vw;
   /* color: #000; */
   font-size: 1.8vw;
   margin-right: 3vw;
   margin-top: 0.5vw;
   margin-bottom: 0.5vw;
   display: inline-block;
   height: 5vw;
   line-height: 3.2vw;
}
#discussion .mui-card .discussion_Title{
   display: flex;
   justify-content: space-between;
   align-items: center;
}
#discussion .mui-card .discussion_Title span{
   background: #d91212;
   color: #fff;
}
#discussion .mui-card .user{
   display: flex;
   justify-content: flex-start;
}
#discussion .mui-card .user_content{
   width: 82vw;
   margin-left: 4vw;
}
#discussion .mui-card .user_content .user_name{
   display: flex;
   justify-content: space-between;
   font-size: 3vw;
   height: 5vw;
   line-height: 5vw;
}
#discussion .mui-card .user_portrait>img{
   width: 6vw;
   border-radius: 50%;
}
#discussion .mui-card .user_total{
   font-size: 3vw;
   height: 5vw;
   line-height: 5vw;
}
#discussion .mui-card .user_total>img{
   width: 4vw;
}
#discussion .mui-card .user_discussion{
   /* height: 7vw; */
   line-height: 7vw;
}
#discussion .mui-card .user_time{
   display: flex;
   justify-content: space-between;
   height: 5vw;
   line-height: 5vw;
}
#discussion .mui-card .user_time>span{
   font-size: 2.5vw;
   color: rgb(201, 201, 201);
}
#discussion .mui-card .user_time>div>span{
   font-size: 2vw;
   border: 1px solid #ddd;
   border-radius: 10vw;
   padding: 0.5vw 1vw;
   margin-right: 2vw;
}
#discussion .notLogin{
   height: 20vw;
   padding: 5vw;
   background: #fff;
   text-align: center;
}
#floot{
   position: fixed;
   bottom: 0;
   text-align: center;
   width: 100%;
}
#floot>div{
   height: 10vw;
   line-height: 10vw;
   background: #d91212;
}
#floot>div>p{
   color: #fff;
   font-size: 3.5vw;
}
.isshow{
   display: none;
}
.ell{
   overflow: hidden;     /*溢出隐藏*/
   white-space: nowrap;   /*不换行*/
   text-overflow: ellipsis;  /*补省略号*/
}
</style>

