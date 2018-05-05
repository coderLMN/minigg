# minigg
## 用非官方 API 插件做的简易 Google 搜索网站

原理非常简单：
1. 从页面接受用户输入搜索关键字；
2. 把关键字通过 xhr 传递给 node.js 后端服务；
3. 通过插件调用 google 非正式接口，搜索关键字；
4. 取得搜索结果列表，并返回页面进行渲染。

包括 HTML 在内，前后端的代码一共才 100 行左右，有注释，应该很容易理解。

出于简单实用目的，没有做搜索结果的分页，一次返回前 100 个结果，基本够用了。

演示网址：http://minigg.herokuapp.com/

*注：这个是搜索工具并不是翻墙工具，所以如果有的网页被墙了，即使在这里搜得到，也很可能打不开。*
