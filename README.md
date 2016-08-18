# uekweb
优逸客web页面SEO

## 网站适用：PC平台 兼容IE8
## 网页内宽：1000px
## 开发规范
### 注意：网站要兼容IE8不要使用css3选择器等不兼容IE8的东西。
* 圆角可以通过以下方式兼容

```
.box-radius {
  border-radius: 15px;
  behavior: url(border-radius.htc);
}
//注意：﻿﻿htc文件是要放在服务器上，放在本地测试是不行的！
```

### 规范
#### 目录结构
> 统一放置对应文件夹中

/<br>
|-------images/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/zkf/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/sgq/<br>
|--------css/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----reset.css 重置默认样式<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----border-radius.htc IE8兼容圆角<br>
|--------js/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.min.js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.lazyload.min.js<br>
|--------index.html<br>
|--------about.html<br>
|--------news.html<br>
<br>
#### 命名规范
- css文件  如： 文件名  hnz-index.css  <br>
                类名 如 .hnz-banner  #hnz-nav （一定要有后代保护）

- js文件   如： 文件名  hnz-index.js  <br>
  错误 window.onload = function(){}  <br>
  正确 $(function(){ }) || window.addEventListener('load',function(){}) <br>
  js文件引用统一放置在body结束之前
- image文件
  文件名 如：hnz-logo.png<br/>
  所有文件 统一放置到自己姓名简拼的文件夹下<br/> 如   images/hnz/ hnz-logo.png<br/> images/wlh/wlh-copy.png

#### 注释
> 必须添加注释并且注释结构清晰

\<!-- #nav 导航开始  --\><br>
\<!-- #nav 导航结束  --\>

## 工具库
- jQuery v1.12.4
- 可使用jquery插件、必须有插件说明 接口必须要有描述

## 优化
- 页面使用懒加载
- 图片要压缩优化
- 代码结构合理

## 任务分配
1. 首页 (1页) 苏国强  8-18日中午完成<br>
<br>
2. 列表页     张凯凤  8-18日中午完成<br>
<br>
