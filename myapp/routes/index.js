var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var markdown = require('markdown').markdown;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'one_express',
  password : '',
  database: 'one_express',
  port: 3306,
  multipleStatements: true //多条语句时需要添加的配置
});
const webname = 'Ys丶王';
connection.connect();

// 文章列表
var sqlArticleList = 'SELECT * FROM `article`';
// 分类列表
var sqlCategoryList = 'SELECT * FROM `category`';
// 分类详情
var sqlCategoryDetail = 'SELECT * FROM `category` where id = ?';
// 文章内容
var sqlArticleDetail = "SELECT * FROM article where code = ?";
// 分类文章列表
var sqlCategoryArticleList = "SELECT * FROM article where cate_id = ?";


// connection.end();
/* GET home page. */
router.get('/', function(req, res, next) {  
  connection.query(sqlArticleList+';'+sqlCategoryList,function (error, results) {
    if (error) throw error;
    res.render('index', { title: webname , articleList: results[0], categoryList: results[1] });
  });  
});

router.get('/a/:code', function (req, res,next) {
  var code = req.params.code;
  connection.query(sqlArticleDetail, [code], function (error, results) {
    if (error) throw error;
    res.render('article', { title: results[0].title , data: results[0]});
  });
});

router.get('/c/:id', function (req, res,next) {
  var id = req.params.id;
  connection.query(sqlCategoryArticleList+';'+sqlCategoryList + ';' + sqlCategoryDetail, [id,id], function (error, results) {
    if (error) throw error;
    res.render('index', { title: results[2][0].name , articleList: results[0], categoryList:results[1] });
  });
});


module.exports = router;
