<template>
	<ul class="multi-dropdown-list">
		<li v-for="item in dataList" :key="item.id" @click="onClickItem(item)">
			<header>
				<span class="btn-icon " :class="item.classNames"></span><span  class="item-head">
				{{item.itemHead}}</span>
			</header>
			<div>
				<p  class="item-body">{{item.itemBody}}</p>
			</div>
		</li>
	</ul>
</template>
<script>
	import {keyid} from "../keyid.vue";
	export default {
		data(){
			return {
				activeItemLen:0,
				dataList:[],
				classMap:{
					'check':'check-square',
					'square':'square-o',
					'icon-active':'icon-active',
					'icon-disable':'icon-disable'
				}

			};
		},
		methods:{
			keyid(item){
				return keyid(item);
			},
			updateDataList(){
				this.dataList = this.dataList.slice(0);
			},
			updateActiveItemLen(isActive){
				if(isActive){
					this.activeItemLen++;
				}else {
					this.activeItemLen--;
				}
				if(this.activeItemLen === this.dataList.length){
					// todo
					this.$emit('clickItem');
				}
				if(!isActive && 
				    this.dataList.length > 1 && 
				    this.activeItemLen === this.dataList.length - 1){
					// todo
					this.$emit('clickItem');
				}
			},
			checkOrUncheck(item){
				item.isActive = !item.isActive;
				let resultList = [];
				if(item.isActive){
					resultList = item.classNames.map((className)=>{
						if(className === this.classMap['square']){
							return this.classMap['check'];
						}
						return className;
					});
					resultList.push(this.classMap['icon-active']);
				}else {
					item.classNames.pop();
					resultList = item.classNames.map((className)=>{
						if(className === this.classMap['check']){
							return this.classMap['square'];
						}
						return className;
					});
				}
				item.classNames = resultList;
				this.updateActiveItemLen(item.isActive);
				this.updateDataList();
			},
			checkAll(){
				for(let x of this.dataList){
					x.isActive = true;
					x.classNames = [this.classMap['check'],this.classMap['icon-active']];
				}
				this.updateDataList();
			},
			unCheckAll(){
				for(let x of this.dataList){
					x.isActive = false;
					x.classNames = [this.classMap['square']];
				}
				this.updateDataList();
			},
			onClickItem(item){
				this.checkOrUncheck(item);
			}
		},
		created(){
			this.dataList = this.listModel.map((dataItem)=>{
				return Object.assign(dataItem,{
					id:keyid(),
					classNames:['square-o'],
					isActive:false,
					isDisable:false
				});
			});
		},
		watch:{
			isCheckAll(val){
				if(val){
					this.checkAll();
					this.activeItemLen = this.dataList.length;
				}else{
					this.unCheckAll();
					this.activeItemLen = 0;
				}
			}
		},
		props:{
			isCheckAll:false,
			listModel:{
				type:Array,
				default:()=>[]
			},
			listAlign:{
				type:String,
				default:'right'
			},
			btnType:{
				type:[String,Array],
				default:'btn-primary'
			}
		}
	}
</script>