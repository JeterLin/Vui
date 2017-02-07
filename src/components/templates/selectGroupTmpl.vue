<template>
	<div class="select-group">
		<sl v-for="item in dataList " :listModel="item.selectList" @change.native="onSelectChange($event,item.idx)" :disabled="item.disabled"></sl>
	</div>
</template>
<script>
	import selectDropdownList from "./selectDropdownList.vue";
	// use it to init `dataListLen`
	const calcHeight = function(listModel){
		let maxheight = 0;
		for(let x of listModel){
			let layerheight = 0;
			if(x && typeof x ==='object'){
				if(Array.isArray(x.subList)){
					layerheight = layerheight + calcHeight(x.subList) + 1;
				}else {
					layerheight = 1;
				}
				if(maxheight < layerheight){
					maxheight = layerheight;
				}
			}
		}
		return maxheight;
	};
	export default {
		data(){
			return {
				dataListLen:0,
				selectedItems:[],
				dataList:[]
			};
		},
		components:{
			'sl':selectDropdownList
		},
		methods:{
			onSelectChange(e,i){
				// console.info(e.target.value);
				let value = e.target.value;
				let selectedIndex = e.target.selectedIndex;
				if(value === 'default'){
					if(i+1 < this.dataListLen){
						this.clearSelectedItems(i+1);
					}
				}else if(typeof value === 'string' && selectedIndex > 0) {
					// for( let x of this.dataList[i].selectList){
					    let x = this.dataList[i].selectList[selectedIndex];						
						if(x.value === value){
							if(i+1 < this.dataListLen){
								this.clearSelectedItems(i+1);
							}
							x.selected = true;
							if(Array.isArray(x.subList) && i+1 < this.dataListLen){
								this.dataList[i+1]=Object.assign(this.dataList[i+1],{
									selectList:[{value:'default',text:'请选择'}].concat(x.subList),
									disabled:false
								});
							}
						}
				}
				
				this.updateDataList();
				this.updateSelectedItems();
			},
			initDataList(listModel){
				
				this.dataListLen = calcHeight(listModel);
				let dataList = [];
				for(let idx = 0;idx<this.dataListLen;idx++){
					dataList.push({
						disabled:true,
						idx:idx,
						selectList:[]
					});
				}
				this.dataList  = dataList;
				// debugger;
				if(this.dataListLen > 0){
					this.dataList[0] = Object.assign(this.dataList[0],{
						disabled:false,
						selectList:[ {text:'请选择',value:'default'},...listModel]
					});
				}else {
					this.dataList.push({
						disabled:true
					});
				}
				if(this.defaultList.length>0){
					let idx = 0;
					let listPath=[];
					for(let x of this.defaultList){
						listPath.push(x);
						this.dataList[idx].disabled = false;
						this.dataList[idx].selectList = [{text:'请选择',value:'default'},...this.getSelectList(listPath)]; 
						this.dataList[idx].idx = idx;
						idx ++;
					}
					
				}
				this.updateSelectedItems();
				this.updateDataList();
			},
			// reset `selectedItems[index].selected` from index of `begin-1` 
			// and disable `dataList[index]` from index of `begin`
			clearSelectedItems(begin){
				var begin = begin || 0;
				var end = this.dataListLen;
				var itemsLen = this.selectedItems.length < end ? this.selectedItems.length :  end;
				for(let iter = begin - 1; iter < itemsLen ;iter ++){
					this.selectedItems[iter].selected = false;
				}
				// `updateSelectedItems` will add all select options whose `selected` field is true again 
				// thus `selectedItems` must be cleared
				this.selectedItems = [];
				for(let iter = begin;iter < end ;iter++){
					this.dataList[iter] = Object.assign(this.dataList[iter],{
						selectList:[],
						disabled:true
					});
				}
			},
			// add all select options whose `selected` field is true
			updateSelectedItems(){
				for(let x of this.dataList){
					if(!x.disabled){
						for(let y of x.selectList){
							if(y.selected){
								// debugger;
								this.selectedItems.push(y);
							}
						}
					}
				}
				// console.info(JSON.stringify(this.selectedItems));
			},
			getSelectList(listPath){
				let targetList = [];
				let curList = this.listModel;
				for(let x of listPath){
					for(let y of curList)
					{
						if(y.value === x){
							targetList = curList;
							y.selected = true;
							if(Array.isArray(y.subList))curList = y.subList;
							break;
						}
					}
				}
				return 	targetList;	
			},
			updateDataList(){
				this.dataList = this.dataList.slice(0);
			}
		},

		created(){
			this.initDataList(this.listModel);
		},
		watch:{
			listModel(val){
				// console.info(val);
				this.initDataList(val);
			}
		},
		props:{
			listModel:{
				type:Array,
				default:()=>{
					return [];
				}
			},
			defaultList:{
				type:Array,
				default:()=>[/*'河北省','石家庄市','新华区'*/]
			}

		}
	};
</script>