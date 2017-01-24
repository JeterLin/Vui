<template>
	<select class="left-padding">
		<option v-for="item in dataList" :key="item.id" :value="item.value" :selected="item.selected">{{item.text}}</option>
	</select>
</template>
<script >
	import keyid from "../utils/keyid.js";
	export default {
		data(){
			return {
				dataList:[]
			};
		},
		methods:{
			initDataList(listModel){
				this.dataList = listModel.map((item)=>{
					return Object.assign({	
						id:keyid(),
						selected:false
					},item);
				});
			}
		},
		created(){
			this.initDataList(this.listModel);
		},
		watch:{
			listModel(val){
				if(Array.isArray(this.dataList)){
					this.initDataList(val);
				}
			}
		},
		props:{
			listModel:{
				type:Array,
				default:()=>[]
			}
		}
	};
</script>