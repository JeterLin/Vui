<template>
	<btn-group class="btn-dropdown">
		<slot></slot>
		<btn-tmpl :btnType="btnType" @click.native="isDrop=!isDrop" :btnState="isDrop ? 'btn-active':'' ">
			{{text}}
			<span class="btn-icon caret-down" :class="caretAlign !='none' ? 'stick-'+caretAlign :'' " ></span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop" :listModel="listModel" :listAlign="listAlign">{{text}}</component>
	</btn-group>	
</template>
<script >
	import buttonTmpl from './buttonTmpl.vue';
	import btnGrpTmpl from './btnGrpTmpl.vue';
	import defaultBtnDropdownList from "./defaultBtnDropdownList.vue";
	export default {
		data(){
			return {
				isDrop:false
			};
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
			caretAlign:{
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