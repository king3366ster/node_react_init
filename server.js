const path = require('path')
const express = require('express')
const ejs = require('ejs')

const app = express()
 
// 将请求响应解析到body的中间件
const bodyParser = require('body-parser')
// 解析 Content-Type:application/x-www-form-urlencoded 的请求到 req.body
// app.use(bodyParser.urlencoded({extended: false}))
// 解析 Content-Type:json 的请求到 req.body
app.use(bodyParser.json())

// 读写cookie的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 静态文件资源，做静态文件服务器，js、css、html资源等
const projPath = process.cwd()
// js,css资源
app.use('/dist', express.static(path.join(projPath, 'dist')))

// 设置html作为渲染器
app.engine('html', ejs.__express);
app.set('view engine', 'html')

// 单页应用页面
app.get('/', function (req, res, next) {
  res.render(path.join(projPath, 'index'))
})

// 修改侦听服务器端口
const port = 3001
app.listen(port)
console.info(`Listen on Port ${port}`)