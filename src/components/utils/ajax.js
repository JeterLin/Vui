class Ajax {
	constructor() {

	}
	get(opt,cb){
		let msg = [];
		if(opt && opt.data ){
			if(typeof opt.data === 'object'){
				msg = Object.keys(opt.data);
				msg = msg.map((key)=>{
					return `${key}=${opt.data[key]}`;
				}).join('&');	
			}else if(typeof opt.data === 'string'){
				msg = opt.data;
			}
			
		}else if(opt == null){
			console.warn('Ajax.get : `opt` should not be null');
		}else if(opt.data == null){
			msg = '';
		}
		this.request(opt,'GET',msg,cb);
	}
	post(opt,cb){
		let msg = '';
		if(opt && typeof opt.data === 'string'){
			msg = opt.data;
		}else if(opt == null){
			console.warn('Ajax.post : `opt` should not be null');
		}
		this.request(opt,'POST',msg,cb);
	}
	request(opt,method,data,cb){

		if(opt && typeof opt.url === 'string' ){
			let xhr = new XMLHttpRequest();
			if(typeof opt.method === 'string' || typeof method === 'string'){
				let m = opt.method || method;
				let url = opt.url ;
				let contentType = 'application/x-www-form-urlencoded';
				if(typeof opt.contentType ==='string' && 
					['application/x-www-form-urlencoded',
					'text/plain',
					'multipart/form-data',
					'application/json'].includes(opt.contentType)){
					contentType = opt.contentType;
				}
				if(m === 'GET'){
					if(typeof data === 'string' && data.length > 0){
						data = '?'+data;
					}
					url = `${url}${data}`;

					xhr.open( m , url , true );
					xhr.setRequestHeader('Content-Type',contentType);
					xhr.send();		
				}else if(m === 'POST'){
					let qstring = '';
					
					if(opt.qstrng){
						if(typeof opt.qstring === 'object'){
							qstring = Object.keys(opt.qstring)
											.map((key)=>`${key}=${opt.qstring[key]}`)
											.join('&');
						}else if(typeof opt.qstring === 'string'){
							qstring = opt.qstring;
						}
					}
					if(qstring.length>0){
						qstring = '?' + qstring;
					}

					url = `${url}${qstring}`;
					
					xhr.open(m,url,true);
					xhr.setRequestHeader('Content-Type',contentType);
					xhr.send(data);
				}

				let readystates = {
					UNSENT:XMLHttpRequest.UNSENT || 0,
					OPENED:XMLHttpRequest.OPENED || 1,
					'HEADERS_RECEIVED':XMLHttpRequest.HEADERS_RECEIVED || 2,
					LOADING:XMLHttpRequest.LOADING || 3,
					DONE:XMLHttpRequest.DONE || 4 
				};
				let respstatus = {
					OK:200,
					'NOT_MODIFIED':304
				};
				xhr.onreadystatechange = function(){
					if(xhr.readyState === readystates.DONE && 
					  (xhr.status === respstatus.OK || xhr.status === respstatus.NOT_MODIFIED)){
						if(typeof cb === 'function'){
							cb.apply(null,[xhr.responseText,xhr]);
						}
					}else if(xhr.readyState === readystates.DONE){
						console.warn('Ajax.request : something wrong with request or server ! \n err response code : '
							         + xhr.status);
					}
				} 
				
			}else {
				console.warn('Ajax.request : `opt.method` or `method` should be string type');
			}
			
		}else if(opt === null){
			console.warn('Ajax.request : `opt` should not be null');
		}else if(typeof opt.url !== 'string'){
			console.warn('Ajax.request : `opt.url` should be string type');
		}
	}

};
export default new Ajax;