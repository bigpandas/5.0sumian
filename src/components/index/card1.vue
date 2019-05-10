<template>
   <div>
      <div id="card1" class="mui-slider-item mui-control-content">
         <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(item, i) in filmList" :key="i" @click="card1filmPro(i)">
               <router-link to="/fillProduct" class="mui-navigate-right">
                  <img class="mui-media-object mui-pull-left" :src="`http://127.0.0.1:3000/${item.img_url}`">
                  <div class="mui-media-body">
                     <span class="my-title" v-text="item.lname"></span>
                     <p class='mui-ellipsis'>
                        评分:
                        <span class="my-score" v-text="item.score.toFixed(1)"></span>
                     </p>
                     <p class='mui-ellipsis' v-text="item.subtitle"></p>
                     <p class='mui-ellipsis' v-text="item.actor"></p>
                  </div>
               </router-link>
            </li>
         </ul>
         <mt-button class="my-button" @click="loadMore">加载更多...</mt-button>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         filmList:{},//电影列表
         hasMost:true,
         pageSize:4,
         pageCount:0,
         PropsI:this.i,
      }
   },
   methods: {
      load(){
         this.axios.get('http://127.0.0.1:3000/getFilmlist/',{params:{pageSize:this.pageSize}}).then(res=>{
            this.filmList=res.data.data;
            // console.log(this.filmList);
            this.pageCount=res.data.pageCount;
         })
      },
      loadMore(){
         if(this.hasMost==true){
            this.pageSize+=4;
            this.load();
            if(this.pageSize>=this.pageSize*(this.pageCount-1)){
               this.hasMost=false;
            }
         }else{
            this.$toast("最后一页了");
            return;
         }
      },
      card1filmPro(i){
         this.$store.commit('setfilmPro',this.filmList[i]);//调用setfilmPro把响应回来的数据放到state中的filmPro
      }
   },
   created(){
      this.load();
   }
}
</script>
<style scoped>
.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item{
   border: 0;
}
.mui-table-view .mui-media-object{
   max-width: 80px;
   height: 105px;
}
.mui-table-view-cell span.my-title{
   font-size: 16px;
}
.mui-table-view-cell span.my-score{
   color: #e1c093;
}
.mui-table-view-cell p.mui-ellipsis{
   font-size: 12px;
}
.mui-navigate-right:after, .mui-push-right:after{
   content: '购票';
   background: #e1c093;
   width: 50px;
   height: 25px;
   border-radius: 20px;
   text-align: center;
   line-height: 25px;
   color: #fff;
   font-size: 12px;
}
.my-button{
   margin: 10px 50% 55px 50%;
   font-size: 12px;
   height: 30px;
   text-align: center;
   transform: translateX(-50%);
}
</style>

