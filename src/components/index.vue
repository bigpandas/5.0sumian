<template>
   <div>
      <nav class="mui-bar mui-bar-tab">
			<router-link to="/film" class="mui-tab-item mui-active">
				<span class="mui-icon my-icon my-index" :class="ischecked==1?'index_action':''"></span>
				<span class="mui-tab-label" :class="ischecked==1?'mui_action':''">电影</span>
			</router-link>
			<router-link to="/activity" class="mui-tab-item">
				<span class="mui-icon my-icon my-activity" :class="ischecked==2?'activity_action':''"></span>
				<span class="mui-tab-label" :class="ischecked==2?'mui_action':''">活动</span>
			</router-link>
			<router-link to="/shopMall" class="mui-tab-item">
				<span class="mui-icon my-icon my-shop-mall" :class="ischecked==3?'shop_mall_action':''"></span>
				<span class="mui-tab-label" :class="ischecked==3?'mui_action':''">商场</span>
			</router-link>
			<router-link to="/me" class="mui-tab-item">
				<span class="mui-icon my-icon my-me" :class="ischecked==4?'me_action':''"></span>
				<span class="mui-tab-label" :class="ischecked==4?'mui_action':''">我</span>
			</router-link>
		</nav>
      <!-- <div class="mui-content">
         <div v-show="span_index==false?'':'isshow'">
            <myindex></myindex>
         </div>
         <div v-show="span_activity==false?'':'isshow'">
            <activity></activity>
         </div>
         <div v-show="span_shop_mall==false?'':'isshow'">
            <shopMall></shopMall>
         </div>
         <div v-show="span_me==false?'':'isshow'">
            <me></me>
         </div>
      </div> -->
   </div>
</template>
<script>
export default {
   data(){
      return {
         ischecked:"",
      }
   },
   created() {
      this.ischecked=this.$store.state.num;
   },
}
</script>
<style scoped>
nav{
   touch-action: none;
}
.isshow{
   display: none;
}
.my-icon{
   background-size: 100% 100%;
}
.mui-tab-label{
   color: #313131;
}
.mui_action{
   color: #e1c093;
}
.my-index{
   background-image: url('../img/ic_tabbar_film_normal.png');
}
.index_action{
   background-image: url('../img/ic_tabbar_film_selected.png');
}
.my-activity{
   background-image: url('../img/ic_tabbar_activity_normal.png');
}
.activity_action{
   background-image: url('../img/ic_tabbar_activity_selected.png');
}
.my-shop-mall{
   background-image: url('../img/ic_tabbar_shop_normal.png');
}
.shop_mall_action{
   background-image: url('../img/ic_tabbar_shop_selected.png');
}
.my-me{
   background-image: url('../img/ic_tabbar_me_normal.png');
}
.me_action{
   background-image: url('../img/ic_tabbar_me_selected.png');
}

</style>

