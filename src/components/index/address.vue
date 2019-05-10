<template>
   <div>
      <mt-header title="城市">
         <router-link :to="`/${add}`" slot="left">
            <mt-button icon="back">返回</mt-button>
         </router-link>
         <router-link :to="`/${add}`" slot="right">完成</router-link>
      </mt-header>
      <div class="mui-content">
			<div id='list' class="mui-indexed-list">
				<!-- <div class="mui-indexed-list-search mui-input-row mui-search">
					<input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索城市">
				</div> -->
				<div class="mui-indexed-list-alert"></div>
				<div class="mui-indexed-list-inner">
					<ul class="mui-table-view">
						<li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />安阳</li>
						<li data-group="B" class="mui-table-view-divider mui-indexed-list-group">B</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />白山</li>
						<li data-group="C" class="mui-table-view-divider mui-indexed-list-group">C</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />长春</li>
						<li data-group="D" class="mui-table-view-divider mui-indexed-list-group">D</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />大理</li>
						<li data-group="E" class="mui-table-view-divider mui-indexed-list-group">E</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />鄂尔多斯</li>
						<li data-group="F" class="mui-table-view-divider mui-indexed-list-group">F</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />阜阳西关</li>
						<li data-group="G" class="mui-table-view-divider mui-indexed-list-group">G</li>
						<li  class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />广州</li>
						<li data-group="H" class="mui-table-view-divider mui-indexed-list-group">H</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />哈尔滨</li>
						<li data-group="J" class="mui-table-view-divider mui-indexed-list-group">J</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />济南</li>
						<li data-group="K" class="mui-table-view-divider mui-indexed-list-group">K</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />喀什</li>
						<li data-group="L" class="mui-table-view-divider mui-indexed-list-group">L</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />拉萨贡嘎</li>
						<li data-group="M" class="mui-table-view-divider mui-indexed-list-group">M</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />满洲里西郊</li>
						<li data-group="N" class="mui-table-view-divider mui-indexed-list-group">N</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />南昌</li>
						<li data-group="P" class="mui-table-view-divider mui-indexed-list-group">P</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />普洱思茅</li>
						<li data-group="Q" class="mui-table-view-divider mui-indexed-list-group">Q</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />齐齐哈尔</li>
						<li data-group="R" class="mui-table-view-divider mui-indexed-list-group">R</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />日喀则</li>
						<li data-group="T" class="mui-table-view-divider mui-indexed-list-group">T</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />塔城</li>
						<li data-group="W" class="mui-table-view-divider mui-indexed-list-group">W</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />万州</li>
						<li data-group="X" class="mui-table-view-divider mui-indexed-list-group">X</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />西安</li>
						<li data-group="Y" class="mui-table-view-divider mui-indexed-list-group">Y</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />延安</li>
						<li data-group="Z" class="mui-table-view-divider mui-indexed-list-group">Z</li>
						<li class="mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left">
							<input type="checkbox" />湛江</li>
					</ul>
				</div>
			</div>
		</div>		
   </div>
</template>

<script>

export default {
   data(){
      return {
			add:'',
		}
	},
	created() {
		this.add=this.$store.state.active;
	},
}
</script>
<style scoped>

</style>