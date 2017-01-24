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
			let calcheight = 0;
			if(typeof x ==='object'){
				if(Array.isArray(x.subList)){
					calcheight = calcheight + calcHeight(x.subList) + 1;
				}else {
					calcheight = 1;
				}
				if(maxheight < calcheight){
					maxheight = calcheight;
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
				dataList:[],
				tempListModel:[]
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
									selectList:[{value:'default',text:'请选择'},...x.subList],
									disabled:false
								});
							}
						}
				}
				
				this.updateDataList();
				this.updateSelectedItems();
			},
			initDataList(){
				let dataList=[
					{
						n:'北京市',
						regionList:['东城区','西城区','朝阳区','丰台区','石景山区']
					},
					{
						n:'天津市',
						regionList:['和平区','河东区','河西区','南开区','河北区']
					}
					,
					{
						n:'河北省',
						regionList:[
						{
							n:'石家庄市',
							regionList:['长安区','桥东区','桥西区','新华区','井陉矿区']
						},
						{
							n:'唐山市',
							regionList:['路南区','路北区','古冶区','开平区','丰南区']
						},
						{
							n:'秦皇岛市',
							regionList:['海港区','山海关区','北戴河区','青龙满族自治县']
						},
						{
							n:'邯郸市',
							regionList:['邯山区','丛台区','复兴区','峰峰矿区','邯郸县']
						},
						{
							n:'邢台市',
							regionList:['桥东区','桥西区','邢台县','临城县','内丘县']
						},
						{
							n:'保定市',
							regionList:['新市区','北市区','南市区','满城县','清苑县']
						}
						]
					}
				];

				this.tempListModel = dataList.map((item)=>{
					return {
						text:item.n,
						value:item.n,
						subList:item.regionList.map((item)=>{
							let text = '';
							let value = '';
							if(typeof item === 'object' ){
								text = item.n;
								value = item.n;
							}else if(typeof item === 'string'){
								text = item;
								value = item;
							}

							let result = {
								text:text,
								value:value
							};
							if(Array.isArray(item.regionList)){
								result.subList = item.regionList.map((item)=>{
									return {
										text:item,
										value:item
									}
								});
							}
							return result;
						})
					};
				});
				this.dataListLen = calcHeight(this.tempListModel);
				for(let idx = 0;idx<this.dataListLen;idx++){
					this.dataList.push({
						disabled:true,
						idx:idx,
						selectList:[]
					});
				}
				this.dataList[0] = Object.assign(this.dataList[0],{
					disabled:false,
					selectList:[ {text:'请选择',value:'default'},...this.tempListModel]
				});
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
				let curList = this.tempListModel;
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
			this.initDataList();
		},
		props:{
			listModel:{
				type:Array,
				default:()=>[]
			},
			defaultList:{
				type:Array,
				default:()=>[/*'河北省','石家庄市','新华区'*/]
			}

		}
	};
</script>