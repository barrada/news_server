const db = require('../config/database');

const Post={};
table='posts_copy1'

// get single post

select_single= async()=>{
	const result = await new Promise((resolve, reject) => {
		db.query(single_query, (err, res) => {
		return void err ? reject(err) : resolve(res)
		})
	})
	return result
}
getsingledata=async()=>{
	result= await select_single()
	return result	
}

Post.getSingle=async(slug)=>{
	single_query = `SELECT * FROM ${table} WHERE slug = '${slug}'`

	SinglePost={"data":await getsingledata()}
	return SinglePost
}

module.exports=Post;