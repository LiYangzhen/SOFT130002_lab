# LAB4设计文档

##设计方法

使用了`bootstrap`中的`grid`、`carousel`等多项技术，实现了首页大图的轮播效果，并且使得页面的元素布局简明。且利用grid布局，结合媒体查询，基本完成了响应式网页的效果。

在外联css中，通过对bootstrap框架中不同类的样式进行覆盖，改变了控件的默认样式，一定程度上实现了UI的自定义，使得各控件更加美观，并拥有了简单的动画效果。

##代码实现

由于页眉和页脚的实现方式大同小异，故在此不举例

###缩略图（css略）
```html
<div class="container">
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <div class="img-box">
                <a href="details.html">
				<img src="../travel-images/small/5855174537.jpg" alt="图片" width="260" height="200>
				</a>
            </div>
                <div class="caption">
                    <h3>Title</h3>
                    <p>富强、民主、文明、和谐、自由 、平等、公正、法治、爱国、敬业、诚信、友善</p>
                </div>
			</div>
    </div>
</div>
```
##效果展示
>![截图1](https://s1.ax1x.com/2020/04/05/GD7v59.jpg "截图1")

>![截图2](https://s1.ax1x.com/2020/04/05/GD7jUJ.jpg "截图2")
