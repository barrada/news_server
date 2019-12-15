const postController={};
const Post=require('../models/PostModel');

// get Single post with slug
postController.single=async function(req, res, next){
	slug=await req.params.slug
	const post= await Post.getSingle(slug);
	res.json(post);   
	
}

module.exports = postController;