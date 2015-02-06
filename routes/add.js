var data = require("../data.json");

exports.addFriend = function(req, res) {   
	console.log(data);
	res.render('add', { "friends" : data.friends });
	
	var newFriend = { 'name' : req.query.name };
	newFriend.name = req.query.name;
	newFriend.description = req.query.description;
	newFriend.imageURL = "http://lorempixel.com/400/400/people";
	
	data["friends"].push(newFriend);
}
