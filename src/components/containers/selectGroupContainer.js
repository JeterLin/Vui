// functional component 
import selectGroupTmpl from "../templates/selectGroupTmpl.vue";
export default {
	functional:true,
	render(h,ctx){
		if(ctx.data.props){
			ctx.data.props = Object.assign(ctx.data.props,{
				text:'hello world'
			});
		}
		return h(selectGroupTmpl,ctx.data,ctx.children);
	},
	props:{
		text:''
	}
};
