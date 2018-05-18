
+ npm clone 克隆到本地
+ 导入sql到mysql数据库
+ 切换到myapp目录
+ 在routes/index 中修改数据库配置文件
+ npm install 安装依赖
+ npm start  启动项目 或 node ./bin/www

#### 线上部署 ####
> 切换到项目目录 pm2 start ./bin/www 默认服务器ip:3000端口访问
> 宝塔环境的->添加pm2 项目 -> 映射并绑定域名到一个站点即可 (貌似端口会变，修改Nginx配置映射的端口为3000 就可以通过域名的80端口访问了)
