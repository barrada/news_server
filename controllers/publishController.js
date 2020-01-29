const publishController={};
const Publish=require('../models/PublishModel');

// get Single post with slug
publishController.publish=async function(req, res, next){

	this.title = req.body.title,
	this.slug = req.body.slug,
	this.type = req.body.type,
	this.thumbnail = req.body.thumbnail,
	this.tags = req.body.tags,
	this.keywords = req.body.keywords,
	this.excert = req.body.excert,
	this.html = req.body.html,
	this.featured = req.body.featured

	const publish= await Publish.publish(this.title,this.slug,this.type,this.thumbnail,this.tags,this.keywords,this.excert,this.html,this.featured);
	res.status(201).json(publish);   
	
}

module.exports = publishController;