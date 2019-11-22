/* 
	Recipes Model
*/

// require database
const db = require('../config/database');

const Recipes={};

table='posts_copy1'

// get All Posts count

rowCount=`SELECT count(*) as numRows FROM ${table}`

db.query(rowCount,function(err,count){
		 postsCount=count[0].numRows
		 pageCount = Math.ceil(postsCount / perPage);
})

// define number of posts per page
const perPage = 20;
// let page = parseInt(req.params.p);
// const pageCount = Math.ceil(postsCount / perPage);

// get posts
// query=`Select * from ${table} ORDER BY id DESC LIMIT 0,10`;


// db.query(query,function (err, data) {
// 		if (err) throw err;
// 		// console.log("entry Inserted");
// 		// clean results - remove quotes
// 		// rep1 = res[0].sub_details.replace(/&quot; ، &quot;/gi,'","')
// 		// rep2 = rep1.replace(/&quot;،&quot;/g,'","')
// 		// rep3=rep2.replace(/&quot;/g,'"')		
// 		// data=JSON.parse(rep3)
		
// 		// title = JSON.parse(res[0]..sub_details.calories)
// 		Recipes.getAll=({
// 			"page":1,
// 			"postsCount": postsCount,
// 			"pageCount":pageCount,
// 			data
// 		})
// 	 })	

// return all recipes
// Recipes.getAll=({'message':'posts model:: all posts loaded.'});

Recipes.getAll = async(page) =>{
	if (!page) { page = 1;}
	if (page > pageCount) {
    page = pageCount
	}

	// define query from to - get page

	// const from = ((page * perPage ) - perPage) ;
	let from = ((page - 1) * perPage) - 1;
	if(from <0){ from = 0}

	let to = (page * perPage);



	// query=`Select * from ${table} ORDER BY id DESC LIMIT ${from}, ${to}`;
	query=`Select * from ${table} ORDER BY id DESC LIMIT ${from}, ${perPage}`;
	// query=`Select * from ${table} ORDER BY id DESC LIMIT ${perPage} OFFSET ${from}`;

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
		// console.log(result)
		return result
		
	}
	// data="test"
	// 	db.query(query,function (err, data) {
	// 		if (err) throw err;					
	// 	 })		
		 	
		 Recipes.All=({
			"page":Number(page),			
			"postsCount": postsCount,
			"pageCount":pageCount,
			"featured":"barrada",
			"data":await getdata()
			// data
		})	



	 return Recipes.All
}

// test
Recipes.getPage= async(page)=>{
	Recipes.test={"page": page}
	return Recipes.test
}

module.exports=Recipes;