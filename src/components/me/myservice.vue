<template>
   <div>
      <mt-header title="">
         <router-link to="/me" slot="left">
            <span class="mui-icon mui-icon-back"></span>
            <span class="headTitle">客服中心</span>
         </router-link>
      </mt-header>
      <div class="my-card">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">智能客服</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">投诉建议</a>
				</li>
            <li class="mui-table-view-cell" @click="call1">
					<a class="">院线客服统一热线</a>
               <span class="my-total" v-text="phone1"></span>
				</li>
            <li class="mui-table-view-cell" @click="call2">
					<a class="mui-navigate-right">全国统一投诉电话</a>
               <span class="my-total" v-text="phone2"></span>
				</li>
            <li class="mui-table-view-cell" @click="call3">
					<a class="mui-navigate-right">集团服务监督电话</a>
               <span class="my-total" v-text="phone3"></span>
				</li>
			</ul>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return {
         phone1:'400-080-6060',
         phone2:'400-009-5066',
         phone3:'400-950-6666',
      }
   },
   methods: {
      call1(){
         this.$toast(this.phone1);
      },
      call2(){
         this.$toast(this.phone2);
      },
      call3(){
         this.$toast(this.phone3);
      }
   },
}
</script>

<style scoped>
.mint-header{
   background: #fff;
   color: #000;
   text-align: center;
}
.mint-header span.mui-icon{
   font-size: 4.5vw;
}
.mint-header span.headTitle{
   margin-left: 3vw;
   font-size: 3vw;
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
   color: #9aace7;
   font-size: 12px;
}
.my-card .mui-table-view-cell > a:not(.mui-btn){
   color: #414141;
   padding-left: 30px;
   font-size: 14px;
}
</style>
