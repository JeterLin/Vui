<template>
	<btn-group class="btn-dropdown">
		<btn-tmpl btnType="btn-primary">{{btnText}}</btn-tmpl>
		<btn-tmpl btnType="btn-primary" @click.native="isDrop=!isDrop">
			<span class="dropdown-caret"></span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop"></component>
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
			btnText:{
				type:String,
				default:''
			},
			dropdownListType:{
				type:String,
				default:'default'
			}
		}
	};
</script>
