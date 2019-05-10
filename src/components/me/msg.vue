<template>
   <div>
      <div class="header">
         <router-link to="/me">
            <span class="mui-icon mui-icon-back"></span>
            <span>信息中心</span>
         </router-link>
      </div>
      <div id="chatView">
         <div class="user">
            <img src="img/user_lable.jpg" alt="" class="chatHp">
            <div>
               <p class="chatName">xhr</p>
               <p class="chatMsg">暂无新消息</p>
            </div>
         </div>
         <div class="user">
            <img src="img/user_lable.jpg" alt="" class="chatHp">
            <div>
               <p class="chatName">xhr</p>
               <p class="chatMsg">暂无新消息</p>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return {}
   }
}
</script>
<style scoped>
.header{
   background: #fff;
   height: 45px;
   width: 100%;
   padding: 14px 0px;
   font-size: 14px;
   border-bottom: 1px solid #ddd;
}
.header span{
   color: #414141;
   margin-left: 3vw;
}
.header .mui-icon{
   color: #000;
   font-size: 20px;
}
.user{
   display: flex;
   padding: 3vw;
   padding-bottom: 2vw;
   flex-direction: row;
   background: #fff;
   border-bottom: 1px solid #ddd;
}
.user img{
   width: 15vw;
   height: 15vw;
   margin-right: 3vw;
}
.user p{
   height: 5vw;
   font-size: 3vw;
   margin: 0;
   padding: 0;
}
.user p:first-child{
   color: #0e0e0e;
   margin-bottom: 2vw;
   font-size: 4vw;
}
</style>


