<template>
	<ul v-if="isMenuType('menu-default')" class="menu-list" :class="getClassName()">
		<li class="menu-item" v-for="firstItem in listModel  " :key="keyid(firstItem)"  >
			<a href="javascript:;" class="item-name">{{firstItem.itemName}}</a>
			<ul class="sub-menu-list" v-if="firstItem.subList && firstItem.subList.length > 0">
				<li class="menu-item" v-for="secondItem in firstItem.subList " :key="keyid(secondItem)" >
					<a href="javascript:;" class="item-name">{{secondItem.itemName}}</a>
				</li>
			</ul>
		</li>
	</ul>

</template>
<script >
	import {keyid} from "../keyid.vue";
	export default {
		
		data(){
			let id = 0;
			return {
				keyid(item){
					return keyid(item);
				}
			};
		},
		methods:{
			getClassName(){
				if(this.menuType === 'menu-default'){
					if(this.listType === 'menu-list-vec'){
						return 'menu-list-vec';
					}else if(this.listType === 'menu-list-group'){
						return 'menu-list-group';
					}
						return 'menu-list-hz';	
				}
			},
			isMenuType(type){
				return type === this.menuType;
			}
				
		},
		computed:{
			testProp:{
				set(val){
					console.info(val);
				}
			}
		},
		props:{
			listModel:{
				type:Array,
				deafult:[]
			},
			menuType:{
				type:String,
				default:'menu-default'
			},
			listType:{
				type:String,
				default:'menu-list-hz'
			}
		}
	}
</script>
<style lang="scss">
	
</style>
