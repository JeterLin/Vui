<template>
<ul class="default-dropdown-list" :style="getListStyle()"  >
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
		mounted(){
			if(this.$slots.default[0].text != ""){
				this.isSlotExist = true;
			}
		},
		methods:{
			keyid(item){
				if(item && item.id){
					return item.id;
				}
				return Math.random().toString().replace('.','');
			},
			getListStyle(){
				let resultObj = {};
				if(typeof this.btnType === 'string' || Array.isArray(this.btnType)){
					if(this.btnType === 'btn-circle' || this.btnType.includes('btn-circle')){
						resultObj['width']='auto';
					}else {
						resultObj['width']='180px';
					}
				}
				if(this.listAlign === 'left'){
					resultObj['left']=0;
				}else if(this.listAlign === 'right'){
					resultObj['right']=0;
				}
				return resultObj;
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
			},
			btnType:{
				type:[String,Array],
				default:'btn-primary'
			}
		}
	};
</script>
