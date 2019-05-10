<template>
   <div id="login_container">
      <mt-header title="">
         <router-link to="/me" slot="left">
            <span class="mui-icon mui-icon-back">
               <span class="my-login">登录注册</span>
            </span>
         </router-link>
      </mt-header>
      <div class="my_alert">
         <p>请先进行登录。未注册的手机号会自动为您注册</p>
      </div>
      <div id="login">
         <div class="my_text">
            <input type="text" placeholder="请输入手机号码" v-model="txtValue">
            <button :class="ischeck==true?'isdisable':''">获取验证码</button>
         </div>
         <div class="my_btn">
            <input type="text" placeholder="请输入验证码" v-model="checkValue">
            <button :class="isPwdcheck==true?'isdisable':''" @click="btn">登录</button>
         </div>
      </div>
      <div class="my_alert">
         <p>
            登录表示您已同意<span>《万达电影用户协议》</span>
         </p>
      </div>
      <div class="login_way">
         <ul>
            <li>
               <span class="mui-icon mui-icon-weibo"></span>
               <p>微博登录</p>
            </li>
            <li>
               <span class="mui-icon mui-icon-qq"></span>
               <p>QQ登录</p>
            </li>
            <li>
               <span class="mui-icon mui-icon-weixin"></span>
               <p>微信登录</p>
            </li>
         </ul>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return {
         ischeck:true,
         isPwdcheck:true,
         login_check:true,
         txtValue:'',
         checkValue:'',
         pwdReg: '52SM',
      }
   },
   methods: {
      txtcheck(){
         var Reg = /^1[3-9]\d{9}$/;
         if(Reg.test(this.txtValue)){
            this.ischeck=false;
         }else{
            this.ischeck=true;
         }
      },
      pwdcheck(){
         if(this.checkValue.length==4){
            this.isPwdcheck=false;
         }else{
            this.isPwdcheck=true;
         }
      },
      btn(e){
         if(!this.ischeck){
            this.axios.get('http://127.0.0.1:3000/login',{params:{phone:this.txtValue}}).then(res=>{
               if(res.data.code==1){
                  sessionStorage.setItem('id',res.data.data[0].id);
                  sessionStorage.setItem('name',res.data.data[0].name);
                  sessionStorage.setItem('phone',res.data.data[0].phone);
                  sessionStorage.setItem('brithday',res.data.data[0].brithday);
                  sessionStorage.setItem('sex',res.data.data[0].sex);
                  sessionStorage.setItem('userhp',res.data.data[0].userhp);
                  this.$toast('登录成功');
                  var t=setTimeout(function(){
                     location.href='http://127.0.0.1:8080/film';
                  },500)
               }
            })
         }else{
            this.$toast('请输入手机号');
            this.txtValue=='';
         }
         if(this.ischeck==false&&this.checkValue.toUpperCase()!==this.pwdReg.toUpperCase()){
            this.$toast('验证码错误');
            this.checkValue='';
         }
      }
   },
   watch: {
      txtValue(){
         this.txtcheck();
      },
      checkValue(){
         this.pwdcheck();
      }
   },
}
</script>

<style scoped>
#login_container{
   background: #fff;
}
.mint-header{
   background: #fff;
   color: #000;
   border-bottom: 1px solid #ddd;
   height: 11vw;
}
.mint-header .my-login{
   font-size: 3.5vw;
   margin-left: 3vw;
}
.mint-header .mui-icon{
   font-size: 5vw;
}
.my_alert{
   text-align: center;
}
.my_alert>p{
   height: 12vw;
   line-height: 12vw;
   margin: 0;
   color: rgb(167, 167, 167);
   font-size: 2.5vw;
}
.my_alert span{
   color: #e2c295;
}
#login{
   text-align: center;
   padding: 0 4vw 4vw 4vw;
}
#login>div.my_text{
   display: flex;
   justify-content: flex-start;
   margin-bottom: 3vw;
}
#login>div.my_text>input{
   width: 60vw;
}
#login>div.my_text>button{
   width: 29vw;
   margin-left: 3vw;
}
#login input{
   margin: 0;
   font-size: 3vw;
   height: 11vw;
   background: #ddd;
   border: 0;
   border: 1px solid #ddd;
   transition: all 0.3s;
}
#login input:hover{
   transition: all 0.3s;
   font-size: 4vw;
   border: 1px solid #e2c295;
}
#login button{
   color: #fff;
   font-size: 4vw;
   background: #e2c295;
   border: 1px solid #e2c295;
}
#login button:hover{
   transition: all 0.3s;
   color: rgb(224, 224, 224);
   background: #d6b88d;
}
#login>div.my_btn>input{
   width: 92vw;
}
#login>div.my_btn>button{
   margin-top: 5vw;
   width: 60vw;
   height: 10vw;
}
#login>div>button.isdisable{
   color: #ddd;
   background: #d6b88d;
}
.login_way>ul{
   list-style: none;
   display: flex;
   justify-content: center;
   align-content: center;
   margin: 0;
   padding: 2vw;
}
.login_way>ul>li{
   width: 32vw;
   text-align: center;
}
.login_way>ul>li>span{
   font-size: 11vw;
   color: rgba(120,120,120,0.5);
}
.login_way>ul>li>p{
   margin-top: 2vw;
}
</style>
