<template>
   <div>
      <myindex></myindex>
      <div id="cinema">
         <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="(item, i) in cinemaList" :key="i">
               <span class="dist">&lt;{{item.dist}}</span>
					<a class="">
						<div class="mui-media-body">
							{{item.cname}}
							<p class='mui-ellipsis' v-text="item.adderss"></p>
						</div>
					</a>
				</li>
			</ul>
      </div>
   </div>
</template>
<script>
import myindex from '@/components/index/my-index.vue'
export default {
   data(){
      return {
         cinemaList:{},
         active:'',
      }
   },
   methods: {
      load(){
         this.axios.get('http://127.0.0.1:3000/getCinema/').then(res=>{
            this.cinemaList=res.data.data;
            // console.log(this.cinemaList);
         });
      },
   },
   created() {
      this.load();
      this.$store.state.active='cinema';
   },
   components:{
      myindex,
   }
}
</script>

<style scoped>
#cinema{
   margin-top: 46px;
   position: relative;
}
#cinema .dist{
   color: #aaa;
   font-size: 13px;
   position: absolute;
   right: 10px;
   top: 30px;
}
#cinema div.mui-media-body{
   font-size: 14px;
}
#cinema div.mui-media-body p.mui-ellipsis{
   margin: 7px 1px;
}
</style>
