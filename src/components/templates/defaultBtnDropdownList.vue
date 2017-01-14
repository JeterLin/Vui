<template>
<ul class="dropdown-list" style="width:180px;" :style="listAlign === 'left' ? {left:0}:{right:0}" >
	<li v-if="isSlotExist"><slot></slot></li>
	<li v-for="item in listModel" :key="keyid(item)">{{item}}</li>
</ul>	
</template>
<script>
	export default {
		data(){
			return {
				isSlotExist:false
			};
		},
		methods:{
			keyid(item){
				if(item && item.id){
					return item.id;
				}
				return Math.random().toString().replace('.','');
			}
		},
		mounted(){
			// console.info(this.$slots.default);
			if(this.$slots.default[0].text != ""){
				this.isSlotExist = true;
			}
		},
		props:{
			listModel:{
				type:Array,
				default:[]
			},
			listAlign:{
				type:String,
				default:'right'
			}
		}
	};
</script>
