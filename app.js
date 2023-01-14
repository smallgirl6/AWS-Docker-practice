
const express = require('express');
const app = express();
const port = 5003;
const multer = require('multer');
const upload = multer({ dest: 'api/image-uploade'});
const fs = require('fs');//用fs模塊讀取文件並將其轉換為二進制數據
require('date-utils');
const dt = new Date();
const nowtime= dt.toFormat("YYYYMMDDHH24MISS");
require('dotenv').config();
const db = require('./db');
//AWS設定
const AWS = require('aws-sdk');
const S3 = new AWS.S3({
    credentials: {
        accessKeyId:process.env.S3_ACCESSKEYID,
        secretAccessKey: process.env.S3_SECRETACESSKEY,
        endpoint: process.env.S3_ENDPOINT//'
    }
});
// 設定 view engine
app.set('view engine', 'ejs')
// 導入public(css  js)資料夾裡的東西
app.use(express.static('public'))
//將每個請求的主體解析為 JSON 對象
app.use(express.json())

 // 叫 express 去 render views 底下叫做 index 的檔案，副檔名可省略
app.get('/', (req, res) => {
  res.render('index')
})
 // 創建了一個 HTTP POST 請求路由
app.post('/api/image-uploade',upload.single('userimage'), async(req, res) => {
    const usermessage = req.body.usermessage;
    const formData = req.file;
    const fileName = 'upload /'+nowtime + formData.originalname
    fs.readFile(formData.path, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const params = {
            Body: data,
            Bucket: process.env.S3_BUCKET,//'userpicbucket'
            Key: fileName,
            ContentType: formData.mimetype  // 把DATA格式從application/octet-stream換成Image/jpeg
        };
        S3.putObject(params, (error, data) => {// an error occurred
            if(error){
                console.log(error, error.stack); 
                res.status(500).json({
                    error:true
                });
            }   
            else{// successful response
                db.pool.getConnection((err, connection) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            error:true
                        });
                    }
                    connection.query('INSERT INTO userpost(message,pic) VALUES (?,?)', [usermessage, fileName], (error, results, fields) => {
                        connection.release();
                        if (error) {
                            console.log(error, error.stack); 
                            res.status(500).json({
                                error:true
                            });
                        }
                        res.status(200).json({
                            ok:true,
                            Key:fileName,
                            usermessage:usermessage
                        });
                    });
                });
            }
        });
    });
       
})
 // 創建了取得RDS資料庫上的路由
app.get('/api/display', async(req, res) => {
    db.pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error:true
            });
        }
        connection.query('SELECT message,pic FROM userpost', (error, results, fields) => {
            connection.release();
            if (error) {
                console.log(error, error.stack); 
                res.status(500).json({
                    error:true
                });
            }
            if (results !=null){
                var dataarray = []; //頁面要呈現的資料
                for (let i = 0; i<results.length; i++) {
                    data={
                        "message":results[i]["message"],
                        "pic":results[i]["pic"],
                    }
                    dataarray.push(data);
                }
                json_data={
                    "data":dataarray
                }   
                res.status(200).json({
                    ok:true,json_data
                });
            }
        });
    });

})
app.listen(port, () => {
  console.log(`Server is listening on port:${port} , http://localhost:${port}`)
})

