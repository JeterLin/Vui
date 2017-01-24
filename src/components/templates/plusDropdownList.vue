<template>
	<table class="plus-dropdown-list">
		<tr v-for="item in dataList" :key="item.id">
			<td class="check-item" @click="onClickCheckItem(item)">
				<span class="btn-icon " :class="item.iconClassNames"></span>
				{{item.itemText}}
			</td>
			<td class="item-value">{{item.itemValue}}</td>
		</tr>
	</table>
</template>
<script >
	import keyid from "../utils/keyid.js";
	export default {
		data(){
			return {
				dataList:[],
				classMap:{
					'square':'square-o',
					'check':'check-square',
					'icon-active':'icon-active'
				}
			};
		},
		
		methods:{
			updateDataList(){
			this.dataList = this.dataList.slice(0);
			},
			checkIcon(item){
				let resultList = [];
				resultList = item.iconClassNames.map((className)=>{
					if(className === this.classMap['square']){
						return this.classMap['check'];
					}
					return className
				});
				resultList.push(this.classMap['icon-active']);
				item.iconClassNames = resultList;
				this.updateDataList();
			},
			uncheckIcon(item){
				let resultList = [];
				item.iconClassNames.pop();
				resultList = item.iconClassNames.map((className)=>{
					if(className === this.classMap['check']){
						return this.classMap['square'];
					}
					return className;
				});
				item.iconClassNames = resultList;
				this.updateDataList();
			},
			onClickCheckItem(item){
				item.isActive = !item.isActive;
				if(item.isActive){
					this.checkIcon(item);
				}else{
					this.uncheckIcon(item);
				}
			},
			initIconClassNames(){
				// this.iconClassNames = ['square-o'];
				this.dataList = this.listModel.map((item)=>{
					return {
						isActive:false,
						itemText:item.itemText,
						iconClassNames:[this.classMap['square']],
						itemValue:item.itemValue,
						id:keyid()
					};
				});
			}
		},
		created(){
			this.initIconClassNames();
		},
		props:{
			listModel:{
				type:Array,
				default:()=>[]
			}
		}
	};
</script>
