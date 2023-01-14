// 引入 library
const express = require('express');
// express 引入的是一個 function
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

// 如何處理不同的 request，參數分別為 url 和要執行的 function

// 默認根路徑
app.get('/', (req, res) => {
  res.send('<h1>hello world!</h1>')
})
// 重新導向路徑
app.get('/index', (req, res) => {
  res.redirect('/')
})
// 返回json格式 可用api

app.get('/json', (req, res) => {
    res.json({
        result:"ok"
    })
})
// 返回HTTP
app.get('/sitemap', (req, res) => {
    res.redirect(301,'/')
  })
// 返回404
app.get('/error', (req, res) => {
    res.status(404).end()
  })
// POST請求 npm install body-parser --save
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.post("/login",(req,res) => {
    console.log(req.body)
    res.json({
        post_result:"ok",
        body:req.body
    })

})


// 設定 view engine
app.set('view engine', 'ejs')
//導入css資料夾裡的東西
app.use('/css', express.static('css'));
app.get('/', (req, res) => {
  res.send('index')
})

app.get('/hello', (req, res) => {
// 叫 express 去 render views 底下叫做 hello 的檔案，副檔名可省略
  res.render('hello')
})
// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})