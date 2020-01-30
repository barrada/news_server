const publishController={};
const Publish=require('../models/PublishModel');

// get Single post with slug
publishController.publish=async function(req, res, next){

	title = await req.body.title,
	slug = await req.body.slug,
	type = await req.body.type,
	thumbnail = await req.body.thumbnail,
	tags = await req.body.tags,
	keywords = await req.body.keywords,
	excert =await  req.body.excert.replace(/'/g, '\\\''),
	html = await req.body.html.replace(/'/g, '\\\''),
	featured = await req.body.featured

	const publish= await Publish.publish(title,slug,type,thumbnail,tags,keywords,excert,html,featured);
	res.status(201).json(publish);   
	
}

module.exports = publishController;