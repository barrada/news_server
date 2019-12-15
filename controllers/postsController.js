const postsController={};
const Posts=require('../models/PostsModel');

// Get All by type 
postsController.posts= async function(req, res, next){

	type=await req.params.type
	page=await req.query.page

	const posts= await Posts.getAll(type,page);
	res.json(posts);   	
}

// get Single post with slug
postsController.single=async function(req, res, next){
	slug=await req.params.slug
	const post= await Posts.getSingle(slug);
	res.json(post);   
	
}

module.exports = postsController;