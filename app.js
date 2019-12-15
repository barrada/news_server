const path = require("path");
const express = require("express");
const cors = require('cors')
const db = require('./config/database');
// const bodyParser = require('body-parser')



const app = express();
const port = process.env.PORT || "8000";

app.use(cors())

// body parser
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define public folder
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/public/uploads'))
// Routes

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');
var postsRouter = require('./routes/posts');
var publishRouter = require('./routes/publish');


app.use('/api', indexRouter);
app.use('/api/recipes/', recipesRouter);
app.use('/api/publish/', publishRouter);
app.use('/api/posts/', postsRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("WHATABYTE: Food For Devs");
// });
// Start Server
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;