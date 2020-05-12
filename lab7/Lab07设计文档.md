#Lab07设计文档

##需求分析

###1、动态生成Dom
使用`document.createElement()`生成所需的元素，再通过`node.className`，`node.style`为元素渲染已经在
css文件中定义好的样式，最后使用`supperNode.appendChild()`生成完整所需的DOM树。

###2、函数的多次使用
将“一”中的指令封装成为一个可以反复执行此类任务的通用函数`generate(work)`，向其中传入一个包含所需内容的数组
`work`，即可完成此项操作。(未对传入数组进行合法性检查)

###3、事件处理
使用`window.onload`注册事件，达到打开HTML文件看见该函数的执行效果。

##效果截图
![效果截图](效果截图.png)