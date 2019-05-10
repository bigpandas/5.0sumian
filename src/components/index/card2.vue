<template>
   <div id="card2" class="mui-slider-item mui-control-content">
      <div class="hotFilm">
         <p>人气榜单</p>
         <div class="container">
            <ul class="filmList" :style="`width:${filmList_width}px`">
               <li v-for="(item, i) in filmList" :key="i">
                  <router-link to="/fillProduct">
                     <img :src="`http://127.0.0.1:3000/${item.img_url}`" alt="">
                     <p class="title" v-text="item.lname"></p>
                     <p class="time">{{item.ltime | datetimeFilter}}</p>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
      <div class="hotList">
         <div>
            <p class="hotList-time">04月18日</p>
            <ul class="mui-table-view mui-table-view-chevron">
               <li class="mui-table-view-cell mui-media" v-for="(item, i) in filmList" :key="i">
                  <router-link to="/fillProduct" class="mui-navigate-right">
                     <img class="mui-media-object mui-pull-left" :src="`http://127.0.0.1:3000/${item.img_url}`">
                     <div class="mui-media-body">
                        <span class="my-title" v-text="item.lname"></span>
                        <p class='mui-ellipsis'>
                           评分:
                           <span class="my-score" v-text="item.score.toFixed(1)"></span>
                        </p>
                        <p class='mui-ellipsis'>古天乐深入虎穴 狱战惊心</p>
                        <p class='mui-ellipsis' v-text="item.actor"></p>
                     </div>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
      <mt-button class="my-button" @click="loadMore">加载更多...</mt-button>
   </div>
</template>
<script>
export default {
   data(){
      return {
         filmList:{},//电影列表
         hasMost:true,
         pageSize:4,
         pageCount:0,
         filmList_width:0,
      }
   },
   methods: {
      load(){
         this.axios.get('http://127.0.0.1:3000/getFilmlist/',{params:{pageSize:this.pageSize}}).then(res=>{
            this.filmList=res.data.data;
            // console.log(this.filmList);
            this.filmList_width=this.filmList.length*100;
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
   },
   created() {
      this.load();
   },
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
.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item{
   border-bottom: 0;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm{
   background: rgba(250,250,250,0.6);
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm p{
   margin: 0;
   font-size: 12px;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm>p{
   padding: 10px 0;
   color: #000;
   font-size: 15px;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm>.container{
   width: 100vw;
   height: 150px;
   overflow: auto;
   /* position: relative; */
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList{
   list-style: none;
   padding: 0;
   margin: 0;
   height: 150px;
   /* overflow-x: scroll;
   overflow-y: hidden;
   position: absolute;
   top: 0;
   left: 0; */
}
/* .mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList_width{
   
} */
.mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList>li{
   margin: 0 10px;
   float: left;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList img{
   width: 80px;
   height: 105px;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList p.title{
   color: #000;
}
.mui-slider .mui-slider-group .mui-slider-item .hotFilm .filmList p.time{
   margin-top: -3px;
}
.mui-slider .mui-slider-group .mui-slider-item .hotList{
   background: #fff;
}
.mui-slider .mui-slider-group .mui-slider-item .hotList p.hotList-time{
   color: #000;
   font-size: 16px;
   margin-bottom: 0;
   margin-left: 15px;
   padding-top: 10px;
}
.mui-slider .mui-slider-group .mui-slider-item .hotList .mui-navigate-right:after, .mui-push-right:after{
   content: '预售';
}
.mui-slider .mui-slider-group .mui-slider-item .hotList .my-button{
   background: #fff;
   border: 0;
}
</style>

