<script>
	export default {
		keyid(item){
			if(item && item.id){
				return item.id;
			}
			return Math.random().toString().replace('.','');		
		}
	}
</script>