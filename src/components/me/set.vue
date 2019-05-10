<template>
   <div>
      <div class="header">
         <router-link to="/me">
            <span class="mui-icon mui-icon-back"></span>
            <span>设置</span>
         </router-link>
      </div>
      <div class="my-card">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">喜欢万达电影？给个好评吧~</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">关于我们</a>
				</li>
            <li class="mui-table-view-cell">
					<a class="">清除缓存</a>
               <span class="my-total">33.83M</span>
				</li>
            <li class="mui-table-view-cell">
					<a class="mui-navigate-right">用户协议</a>
				</li>
            <li class="mui-table-view-cell">
					<a class="mui-navigate-right">退票须知</a>
				</li>
			</ul>
      </div>
      <div class="quitLogin">
         <mt-button :class="islogin==true?'isshow':''" @click="upLogin">退出登录</mt-button>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return {
         islogin:true,
      }
   },
   methods: {
      load(){
         if(sessionStorage.getItem('id')){
            this.islogin=false;
         }
      },
      upLogin(){
         if(confirm('确认要退出吗?')){
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('phone');
            sessionStorage.removeItem('sex');
            sessionStorage.removeItem('userhp');
            sessionStorage.removeItem('brithday');
            this.$toast('退出成功');
            var t=setTimeout(function(){
               location.href='http://127.0.0.1:8080/me/'
            },1000)
         }
      }
   },
   created() {
      this.load();
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
}
.header span{
   color: #414141;
   margin-left: 5px;
}
.header .mui-icon{
   color: #000;
   font-size: 20px;
}
.my-card{
   margin-top: 10px;
}
.mui-table-view-cell{
   position: relative;
   padding: 11px 15px 11px 0;
   border-bottom: 1px solid #e8e8e8;
}
.mui-table-view-cell:hover{
   transition: all 0.2s;
   background: #f3f3f3;
}
.mui-table-view:after{
   content: ''
}
.mui-table-view-cell:after{
   content: '';
   background: none;
}
.mui-table-view-cell > a:not(.mui-btn)+span.my-total{
   position: absolute;
   top: 27%;
   right: 5%;
   color: #bababa;
   font-size: 12px;
}
.my-card .mui-table-view-cell > a:not(.mui-btn){
   color: #414141;
   padding-left: 30px;
   font-size: 14px;
}
.quitLogin{
   display: flex;
   justify-content: center;
   margin-top: 15px;
}
.mint-button--default{
   color: #e2c295;
   border: 1px solid #e2c295;
   font-size: 14px;
   width: 90%;
   height: 45px;
}
.quitLogin .isshow{
   display: none;
}
</style>
