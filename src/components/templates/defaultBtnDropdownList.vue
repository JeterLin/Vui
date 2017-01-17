<template>
<ul class="default-dropdown-list" :style="initListStyle()"  >
	<li v-if="isSlotExist"><slot></slot></li>
	<li v-for="item in listModel" :key="keyid(item)">{{item}}</li>
</ul>	
</template>
<script>
	import {keyid} from "../keyid.vue";
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
				return keyid(item);
			},
			initListStyle(){
				let styleObj = {};
				if(typeof this.btnType === 'string' || Array.isArray(this.btnType)){
					if(this.btnType === 'btn-circle' || this.btnType.includes('btn-circle')){
						styleObj['width']='auto';
					}else {
						styleObj['width']='180px';
					}
				}
				if(this.listAlign === 'left'){
					styleObj['left']=0;
				}else if(this.listAlign === 'right'){
					styleObj['right']=0;
				}
				return styleObj;
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
