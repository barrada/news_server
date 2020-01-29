const db = require('../config/database');

const Publish={};
table='posts_copy1'

// publish single post

Publish.publish=async(title,slug,type,thumbnail,tags,keywords,excert,html,featured)=>{
	// single_query = `SELECT * FROM ${table} WHERE slug = '${slug}'`


	return "publish model"
}

module.exports=Publish;