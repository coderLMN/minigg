var express = require("express")
path = require('path'),
bodyParser = require('body-parser');

var app = express();
var google = require('google')            // 运用非官方接口插件

google.resultsPerPage = 100;              // 一次返回 100 条搜索结果

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));


app.get('/', function (req, res) {
    res.sendFile('index.html');           // 首页
})


app.post('/search', function(req, res){
    var keywords = req.body.keywords;     // 获取搜索关键字
    google(keywords, function (err, sr){  // 调用搜索接口
        if (err) console.error(err)
        res.setHeader('Content-Type', 'application/json; charset="utf-8"');
        res.end(JSON.stringify(sr.links)) // 返回搜索结果列表
    })
})

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});