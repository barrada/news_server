const db = require('../config/database');

const Publish={};
table='posts_copy1'

// publish single post

Publish.publish=async(title,slug,type,thumbnail,tags,keywords,excert,html,featured)=>{
	// single_query = `SELECT * FROM ${table} WHERE slug = '${slug}'`
insert_query=`INSERT INTO ${table}(title,slug,type,thumbnail,xs_image,card_image,lg_image,original_image,excert,body,tags,keywords,featured,status) VALUES ('${title}','${slug}','${type}','${thumbnail}','${thumbnail}','${thumbnail}','${thumbnail}','${thumbnail}','${excert}','${html}','${tags}','${keywords}','${featured}',1)`

if (title == '' ) {
		return 'title needed'
} else {
	db.query(insert_query, (err, res) => {
		if (err){ throw err}
		})
		return 'success'
	}
}

module.exports=Publish;