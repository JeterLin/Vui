<template>
	<btn-group class="btn-label">
		<span v-if="caretAlign ==='right' " class="btn label" :class="'label-'+caretAlign+'-caret'">{{labelText}}</span>
		<btn-tmpl btnType="btn-primary" :btnIcon="btnIcon"><span slot="afterIcon">{{btnText}}</span></btn-tmpl>
		<span v-if="caretAlign === 'none' || caretAlign === 'left' " class="btn label" :class="'label-'+caretAlign+'-caret'">{{labelText}}</span>
	</btn-group>
</template>
<script >
	import buttonTmpl from "./buttonTmpl.vue"
	import btnGrpTmpl from "./btnGrpTmpl.vue";
	export default {
		data(){
			return {};
		},
		props:{
			btnText:{
				type:String,
				default:''
			},
			labelText:{
				type:String,
				default:''
			},
			btnIcon:{
				type:String,
				default:''
			},
			caretAlign:{
				default:'none',
				validator(value){
					return ['none','left','right'].includes(value);
				}
			}
		},

		components:{
			"btnGroup":btnGrpTmpl,
			"btnTmpl":buttonTmpl	
		}
		

	};
</script>
