const recipesController={};
const Recipes=require('../models/RecipesModel');

// get all Posts
recipesController.recipes= async function(req, res, next){
		page=await req.query.page
    const recipes= await Recipes.getAll(page);
		res.json(recipes);   
		
}
// get one post by slug
// postsController.getPost= async function(req, res, next){
//     try{
//         let slug=req.params.slug;
//         const post= await Posts.getPost(slug);
//         if(post === 204){
//             res.status(204).json({'message':'no content'});
//         }else{
//             res.status(200).json(post);
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// // post a post
// postsController.postPost= async function(req, res, next){
//     const posts= await Posts.postPost;
//     res.status(200).json({posts});
    
// }

// export
module.exports = recipesController;