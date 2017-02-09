var fs = require('fs');
var regionData = fs.readFileSync(__dirname+'/region.json');
function app(app){
	app.get('/api/regionlist',function(req,res){
		var contentType = req.get('content-type');
		res.set('Content-Type',contentType);
		res.end(regionData);
	});
}
module.exports = app;