<template>
	<btn-group class="btn-dropdown">
		<slot></slot>
		<btn-tmpl :btnType="btnType" @click.native="isDrop=!isDrop" :btnState="isDrop ? 'btn-active':'' ">
			{{text}}
			<span class="btn-icon " :class="getBtnIconClassNames()" ></span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop" :btnType="btnType" :listModel="listModel" :listAlign="listAlign">{{text}}</component>
	</btn-group>	
</template>
<script >
	import buttonTmpl from './buttonTmpl.vue';
	import btnGrpTmpl from './btnGrpTmpl.vue';
	import defaultBtnDropdownList from "./defaultBtnDropdownList.vue";
	export default {
		data(){
			return {
				isDrop:false,
				classMap:{
					'caret':'caret-down',
					'ellipsis':'ellipsis-h',
					'iconLeft':'stick-left',
					'iconRight':'stick-right',
					'defaultVal':''
				}
			};
		},
		methods:{
			getBtnIconClassNames(){
				let iconAlign = 'defaultVal';
				if(this.iconAlign == 'left'){
					iconAlign = 'iconLeft';
				}else if(this.iconAlign == 'right'){
					iconAlign = 'iconRight';
				}
				let resultList = [
					this.classMap[this.btnIcon],

					this.classMap[iconAlign]
				];
				return resultList;
			}
		},
		components:{
			'btnTmpl':buttonTmpl,
			'btnGroup':btnGrpTmpl,
			'default':defaultBtnDropdownList
		},
		props:{
			text:{
				type:String,
				default:''
			},
			dropdownListType:{
				type:String,
				default:'default'
			},
			btnType:{
				type:[String,Array],
				default:'btn-primary'
			},
			btnIcon:{
				type:[String,Object],
				default:'caret'
			},
			// align icon relative to text in the button 
			iconAlign:{
				type:String,
				default:'none',
				validator(value){
					return ['left','right','none'].includes(value);
				}
			},
			listAlign:{
				type:String,
				default:'right'
			},
			listModel:{
				type:Array,
				default:()=>[]
			}
		}
	};
</script>