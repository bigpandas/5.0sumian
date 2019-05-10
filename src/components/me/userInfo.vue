<template>
   <div>
      <mt-header title="">
         <router-link to="/me" slot="left">
            <span class="mui-icon mui-icon-back"></span>
            <span class="headTitle">个人资料</span>
         </router-link>
      </mt-header>
      <div class="my-card">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell my-userhp">
					<a class="mui-navigate-right my-hp">头像</a>
               <span class="my-total">
                  <img :src="`http://127.0.0.1:3000/${userhp}`" alt="">
               </span>
				</li>
				<li class="mui-table-view-cell" @click="sureName">
					<a class="mui-navigate-right">昵称</a>
               <span class="my-total" v-text="set.name"></span>
				</li>
			</ul>
      </div>
      <div class="my-card">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell" @click="sex">
					<a class="mui-navigate-right">性别</a>
               <span class="my-total">{{userSex | sexFilter}}</span>
				</li>
				<li class="mui-table-view-cell" @click="brithday">
					<a class="mui-navigate-right">生日</a>
               <span class="my-total">{{userBrithday | brithdayFilter}}</span>
				</li>
			</ul>
      </div>
      <div class="my-card">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell" @click="surePhone">
					<a class="mui-navigate-right">手机</a>
               <span class="my-total">{{set.phone | userPhoneFilter}}</span>
				</li>
			</ul>
      </div>
      <mt-popup v-model="brithdayPopupVisible" position="bottom" class="prop-tk">
         <div class="clR pop-btn clearfix">
            <p @click="">取消</p>
            <p @click="sureBrithday">确定</p>
         </div>
         <mt-picker ref="pickCom" :slots="brithdaySlots" @change="onValuesBrithdayChange"></mt-picker>
      </mt-popup>
      <mt-popup v-model="sexPopupVisible" position="bottom" class="prop-tk">
         <div class="clR pop-btn clearfix">
            <p @click="">取消</p>
            <p @click="sureSex">确定</p>
         </div>
         <mt-picker ref="pickCom" :slots="sexSlots" @change="onValuesSexChange"></mt-picker>
      </mt-popup>
   </div>
</template>
<script>
import vuePickers from 'vue-pickers'
export default {
   data(){
      return {
         userhp:'',
         userBrithday:'',
         userSex:'',
         brithdayPopupVisible:false,
         sexPopupVisible:false,
         brithdaySlots:[
            {
               flex: 1,
               defaultIndex: 0,
               values:[],
               className: 'slot1',
               textAlign: 'center',
            },  
            {
               flex: 1,
               values:['01','02','03','04','05','06','07','08','09','10',11,12],
               className: 'slot2',
               textAlign: 'center'
            },
            {
               flex: 1,
               values: ['01','02','03','04','05','06','07','08','09','10',11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
               className: 'slot3',
               textAlign: 'center'
            }
         ],
         sexSlots:[
            {
               flex: 1,
               defaultIndex: 0,
               values:['男','女'],
               className: 'slot1',
               textAlign: 'center',
            },
         ],
         set:{
            name:'',
            phone:'',
            brithday:'',
            sex:''
         },
      }
   },
   methods: {
      yearCheck(min,max){
         var value=[];
         for(var i=min;i<max;i++){
            value.push(i+1);
         }
         return value;
      },
      brithday(){
         this.brithdayPopupVisible=true;
      },
      sex(){
         this.sexPopupVisible=true;
      },
      onValuesBrithdayChange(picker,values){
         this.set.brithday=values.join('');
         // console.log(this.set.brithday);
      },
      onValuesSexChange(picker,values){
         this.set.sex=values.join('');
         // console.log(this.set.sex)
      },
      sureName(){
         var name=prompt('请输入你新的昵称');
         var Reg=/^\w{3,11}$/;
         // console.log(Reg.test(name));
         if(Reg.test(name)){
            this.set.name=name;
            this.setUser();
         }else{
            this.$toast('输入格式错误');
         }
      },
      sureBrithday(){
         this.setUser();
         // this.userBrithday=this.set.brithday;
         this.brithdayPopupVisible=false;
      },
      sureSex(){
         this.setUser();
         // this.userSex=this.set.sex;
         this.sexPopupVisible=false;
      },
      surePhone(){
         var phone=prompt('请输入你新的手机号码');
         var Reg=/1[3-9]\d{9}/;
         if(Reg.test(phone)){
            this.set.phone=phone;
            this.setUser();
         }else{
            this.$toast('输入格式错误')
         }
      },
      setUser(){
         var id=sessionStorage.getItem('id');
         var params={
            id:id,
            name:this.set.name,
            brithday:this.set.brithday,
            phone:this.set.phone,
            sex:this.set.sex,
         }
         console.log(params);
         this.axios.get('http://127.0.0.1:3000/setUser/',{params:params}).then(res=>{
            if(res.data.code==1){
               this.$toast(res.data.data);
               // console.log(111);
               this.load();
            }
            location.href='http://127.0.0.1:8080/userInfo';
         })
      },
      load(){
         this.axios.get('http://127.0.0.1:3000/login',{params:{phone:this.set.phone}}).then(res=>{
            if(res.data.code==1){
               sessionStorage.setItem('id',res.data.data[0].id);
               sessionStorage.setItem('name',res.data.data[0].name);
               sessionStorage.setItem('phone',res.data.data[0].phone);
               sessionStorage.setItem('brithday',res.data.data[0].brithday);
               sessionStorage.setItem('sex',res.data.data[0].sex);
               sessionStorage.setItem('userhp',res.data.data[0].userhp);
            }
         })
      }
   },
   created() {
      this.set.name=sessionStorage.getItem('name');
      this.set.sex=sessionStorage.getItem('sex');
      this.userSex=sessionStorage.getItem('sex');
      this.set.brithday=sessionStorage.getItem('brithday');
      this.userBrithday=sessionStorage.getItem('brithday');
      this.set.phone=sessionStorage.getItem('phone');
      this.userhp=sessionStorage.getItem('userhp');
      this.brithdaySlots[0].values=this.yearCheck(1991,2019);
      // this.brithdaySlots[1].values=this.yearCheck(0,12);
      // this.brithdaySlots[2].values=this.yearCheck(0,31);
   },
}
</script>

<style scoped>
.mint-header{
   background: #fff;
   color: #000;
   text-align: center;
   height: 45px;
   font-size: 14px;
}
.mint-header span.mui-icon{
   font-size: 20px;
}
.mint-header span.headTitle{
   margin-left: 2vw;
   /* font-size: 2.5vw; */
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
.mui-table-view-cell:after{
   content: '';
   background: none;
}
.my-card .mui-table-view-cell > a:not(.mui-btn){
   color: #414141;
   padding-left: 30px;
   font-size: 14px;
}
.mui-table-view-cell > a:not(.mui-btn)+span.my-total{
   position: absolute;
   top: 27%;
   right: 9%;
   color: #c3c3c3;
   font-size: 12px;
}
.mui-table-view-cell > a:not(.mui-btn)+span.my-total>img{
   width: 10vw;
}
.my-hp:after{
   content: '';
}
.my-card .mui-table-view .mui-table-view-cell.my-userhp{
   height: 15vw;
   display: flex;
   align-items: center;
}
.my-card .mui-table-view .mui-table-view-cell.my-userhp .my-total{
   margin-top: -1.5vw;
}
.clR{
   display: flex;
   flex-flow: row;
   justify-content: space-around;
   padding: 3vw;
   
}
.clR>p{
   margin: 0;
   color: rgb(119, 201, 221);
   font-size: 4.5vw;
}
.mint-popup{
   width: 100%;
}
</style>
