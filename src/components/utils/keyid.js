function keyid(item){
	if(item && item.id){
		return item.id;
	}
	return Math.random().toString().replace('.','');		
}
export default keyid;
