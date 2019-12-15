const db = require('../config/database');

const Posts={};
table='posts_copy1'
const perPage = 20;
// Count posts excluding featured for pagination


// Get All Posts

// 
Posts.getAll = async(type,page)=>{

	rowCount=`SELECT count(*) as numRows FROM ${table} WHERE type="${type}" AND status=1 AND id NOT IN (select * from (select id from ${table} where type="${type}" AND  status=1 AND featured=1 ORDER BY id DESC LIMIT 5) as t1)`

	db.query(rowCount,function(err,count){
			postsCount=count[0].numRows
			pageCount = Math.ceil(postsCount / perPage);
	})

	// default to page 1
	if (!page) { page = 1;}
	if (page > pageCount) {
    page = pageCount
	}
	// determining page range
	let from = ((page - 1) * perPage) - 1;
	if(from <0){ from = 0}

	let to = (page * perPage);

	// query to get all posts excluding featured
	query=`Select * from ${table} WHERE type="${type}" AND status=1 AND id NOT IN (select * from (select id from ${table} where type="${type}" AND status=1 AND featured=1 ORDER BY id DESC LIMIT 5) as t1) ORDER BY id DESC LIMIT ${from}, ${perPage}`;
	select= async()=>{
		const result = await new Promise((resolve, reject) => {
  	  db.query(query, (err, res) => {
      return void err ? reject(err) : resolve(res)
   	 })
		})
		return result
	}
	getdata=async()=>{
		result= await select()		
		return result		
	}
	// featured query 
	featured_query = `SELECT * from ${table} WHERE type="${type}" AND status = 1 and featured = 1 ORDER BY id DESC LIMIT 5`

	select_fearured= async()=>{
		const result = await new Promise((resolve, reject) => {
  	  db.query(featured_query, (err, res) => {
      return void err ? reject(err) : resolve(res)
   	 })
		})
		return result
	}
	getfeatured=async()=>{
		result= await select_fearured()
		// console.log(result)
		return result		
	}
	// return all results
	Posts.All=({
		"page":Number(page),			
		"postsCount": postsCount,
		"pageCount":pageCount,
		"featured":await getfeatured(),
		"data":await getdata()
		// data
	})	
	return Posts.All
	// 
	// test=({
	// 	"type":type,
	// 	"page":page,
	// 	"pages":pageCount,
	// 	"posts":postsCount
	// })
	// return test
}

module.exports=Posts;