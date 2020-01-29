const publishController={};
const Publish=require('../models/PublishModel');

// get Single post with slug
publishController.publish=async function(req, res, next){

	title = req.body.title,
	slug = req.body.slug,
	type = req.body.type,
	thumbnail = req.body.thumbnail,
	tags = req.body.tags,
	keywords = req.body.keywords,
	excert = req.body.excert,
	html = req.body.html,
	featured = req.body.featured

	const publish= await Publish.publish(title,slug,type,thumbnail,tags,keywords,excert,html,featured);
	res.status(201);   
	
}

module.exports = publishController;