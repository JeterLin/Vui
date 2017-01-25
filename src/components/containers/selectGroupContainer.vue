<template>
	<select-group :listModel="listModel"></select-group>
</template>
<script >
import selectGroupTmpl from "../templates/selectGroupTmpl.vue";
import ajax from "../utils/ajax";
const selectGroupContainer = {
	data(){
		return {
			listModel:[]
		};
	},
	methods:{
		parseToSelectGroupListModel(regionList){
			let list = [];
			for(let x of regionList){
				if(x && typeof x === 'object'){
					let resultObj = {
						value:x.n,
						text:x.n
					};
					if(Array.isArray(x.s)){
						resultObj.subList = this.parseToSelectGroupListModel(x.s);
					}
					list.push(resultObj);
				}
			}
			return list;
		}
	},
	created(){
		ajax.get({
			url:'api/regionlist',
			contentType:'application/json'
		},(respText)=>{
			let regionList = JSON.parse(respText);
			this.listModel = this.parseToSelectGroupListModel(regionList);
		});
	},
	components:{
		'selectGroup':selectGroupTmpl
	}

};
export default selectGroupContainer;
</script>