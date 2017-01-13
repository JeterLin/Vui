<template>
	<section id="intro">
		<div class="intro-inner">
			<div class="intro-body">
				<slot name="in-body"></slot>
			</div>
			<slot name="out-body"></slot>
		</div>
	</section>
</template>
<script >
	class Details {
		constructor(componentName){
			this.componentName = componentName ;
			this.detailList = [];
		}
	}
	function extractTitles(details,xtitle){
		xtitle.onceInsertedEnd((titlesMap)=>{
		let q = [];
		for(let iter of titlesMap){
			q.push(iter);
		}

		while(q.length!=0){
			
			let item = q.shift();
			let subtitles = [];

			
			for(let child of item.subtitles){
				subtitles.push({
					title:child.title
				});
			}
			if(subtitles.length == 0){
				subtitles.push({
					title:item.title
				});
			}
			details.detailList.push({
				title:item.title,
				subtitles:subtitles,
				isActive:false
			});
				
		}
	});
	}
	export default {
		data(){
			return {};
		},
		extractTitles:extractTitles,
		Details:Details
	}
</script>
<style lang="scss">
	// @import "../style/mixin";
	// @import "../style/common";
	
</style>