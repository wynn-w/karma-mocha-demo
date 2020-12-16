# karma-mocha-demo
### 利用karma+mocha+chai搭建单元环境（踩坑记录）
* * *
**遇到的问题**：引入parcel后，打包运行时候一直提示报错 ：不期待 import, export。

**思路**：
* 首先想到的是 ES6 => ES5 转换失败，并在此道路上深 坑自我。然后一直查 Bebal 的配置 ，并没有任何作用。

* 回看他人案例，发现很多存在 HTML文件！因此，添加HTML文件，并将JavaScript引入其中。再运行， import 导入的文件已能在被导入的文件中运行，但仍存在报错。此时，思路中断。

* 再次观察他人案例，在 karma.conf.js 文件中发现了 'file' 配置项的定义为“需要载入到浏览器的文件“与之前的理解“前面的为源文件，后面文件为测试文件”不符合！删除行 ” test/**/*.test.js”，运行无报错，成功！

**原因猜测**：

项目中不存在 HTML 文件时:
1. 无法解析ES6模块；

2. 默认启动环境为 node但是又没有node环境，造成冲突；

**验证**：
* 对① 不知道怎么去证实；

* 对②，将ES6模块规范换成CommonJS规范，运行并无报错且与浏览器不兼容CommonJS的观点相悖。

**对②验证的思考**：   

* 搜索chrome是否兼容CommonJS规范，并无发现，且找到了模块规范混合兼容的插件。由此推测chrome本身应该是不支持的，但是面对成功的运行结果，很难想象这其中发生了什么神奇的变化。待有朝一日，知识储备足够时方可知晓。
* 待续……
