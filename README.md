配置host：  127.0.0.1   dev.china-invs.cn （为了登录时校验验证码）


# 开发

`step1：` 安装依赖
npm install

`step2：` 运行
npm run dev

在浏览器中访问：http://dev.china-invs.cn:8080/#/


**涉及到的知识点**
- 组件的使用
- 简单指令的使用：v-on v-bind v-for等
- 父组件向子组件通信：props
- ~~子组件向父组件通信：$emit~~
- 路由的简单使用，包含动态路由：官方推荐的vue-router
- http请求数据：官方推荐的axios

# 部署

在根目录下执行

`step1：`
npm install --production

`step2：`
node prod.server.js
