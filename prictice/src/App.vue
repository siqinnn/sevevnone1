<template>
  <div id="app">
    <div>
      <p>使用路由name属性跳转</p>

      <button v-for="name of nameList" :key="name" @click="Route(name)">{{name}}</button>
      <router-view></router-view>
    </div>

    <!-- <div>
      <p>使用路由path属性跳转</p>
      <button
        v-for='path of pathList'
        :key='path'
        @click="Route2(path)"
      >{{path}}</button>
    </div>-->

    <!-- 展示路由 跳别的页面   子路由的内容输出窗口 -->

    <div class="fu">
      <child @clickkkkk="showchild" :duixiang="duixiang"></child>
    </div>

    <div class="new">
      <div>
        <p class="heiha">1.css选择器有哪些？选择器关系？</p>(1)标签选择器--p.div.ul.li
        <br />(2)类选择器--class="name"
        <br />(3)ID选择器--id="name"
        <br />(4)伪类选择器--a.link.visitid.active
        <br />(4)伪选择器--before.after
        <br />(5)全局选择器--*号
        <br />(6)继承选择器--父级 子集 div kk
        <br />(7)选择器关系：
        <br />！important>内联>id>class>
        <br />标签>通配符>继承
      </div>
      <div>
        <p class="heiha">2.Background简写怎么写，拆开写怎么写？</p>(1)background-color--背景颜色
        <br />(2)background-position--定位位置
        <br />(3)background-size--背景大小
        <br />(4)background-repeat--是否平铺
        <br />(5)background-origin--基准点
        <br />(6)background-clip--切割
        <br />(7)background-attachment--设置固定背景
        <br />(8)background-image--背景图片
        <br />
      </div>
      <div>
        <p class="heiha">
          3.文字怎么添加下划线，怎么居中/上下、
          <br />左右/，怎么缩进
          ，怎么设置字符间距？
          <br />怎么引入第三方字体、图标
        </p>
        <p style=" text-decoration: underline">文字下划线</p>
        <p style="text-align: center;
  line-height: 10px;">文字居中（上下）</p>
        <p style=" text-indent: 10px;">文字缩进</p>
        <p style="letter-spacing:20px;">字符间距</p>
        <a href="#">
          <i class="fa fa-home fa-fw"></i>&nbsp; 首页
        </a>
      </div>
      <div>
        <p class="heiha">4.em，rem，vh，vw，px分别什么意思？</p>(1)px是像素值，屏幕显示最小点,
        <br />(2)em是相对于父级的字体大小,
        <br />(3)rem是相对于html根元素的字体大小,
        <br />(4)vh和vw相对于视口的高度和宽度
      </div>
      <div>
        <p class="heiha">5.Table表格怎么合并边框？</p>
        <p>border-collapse: collapse;</p>
        <table>
          <caption>学生成绩表</caption>
          <thead>
            <tr>
              <th>学号</th>
              <th>姓名</th>
              <th>成绩</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>猫啊</td>
              <td>88</td>
            </tr>
            <tr>
              <td>2</td>
              <td>狗啊</td>
              <td>98</td>
            </tr>
            <tr>
              <td>3</td>
              <td>猫狗</td>
              <td>68</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">6.Css盒模型有哪些属性？ 意义是 ？</p>(1)width和height
        <br />(2)min-width和max-width
        <br />(3)padding
        <br />(4)margin
        <br />(5)border
      </div>
      <div>
        <p class="heiha">7.元素边框设置有哪些属性？</p>
        <p>border-width 元素边框宽度--1px</p>
        <p>border-color 元素边框颜色--red</p>
        <p>border-style 元素边框线--solid/dashed</p>
        <p>border 元素边框上/下/左/右</p>
        <p>border-top 下边框</p>
        <p>border-right 右边框</p>
        <p>border-left 左边框</p>
        <p>border-bottom 下边框</p>
        <p style="  border:1px dashed red;">边框宽度-1px/边框线-dashed/边框颜色-red</p>
      </div>
      <div>
        <p class="heiha">8.行元素、块元素怎么切换？</p>
        <p>行级：span标签 inline-- 切换成行级元素</p>
        <p>块级：div标签 block-- 切换成块级元素</p>
        <p>
          行块级：img标签 inline-block-- 切换
          <br />成行块级元素
        </p>
      </div>
      <div>
        <p class="heiha">9.Css定位属性有哪些？意义是什么？</p>(1) position：relative 相对定位----自身
        <br />(2) position：absolute 绝对定位----父级
        <br />(3)position：fixd 固定定位----浏览器
        <br />注 ：常用的三种定位，都用top/bottom/
        <br />left/right定位
      </div>
      <div>
        <p class="heiha">
          10.内容溢出（超长）布局属性有哪些，文
          <br />字超长怎么显示为省略？
        </p>overflow属性:
        <br />visible--内容不剪切，溢出显示在框外
        <br />hidden--内容剪切，移除元素内容不可见
        <br />scroll--内容会溢出剪切，自动生成滚动条
        <br />auto--内容如果溢出， 会自动生成滚动条
        <br />inherit--继承父级的overflow值
        overflow:hidden;
        <br />text-overflow: ellipsis;
        <br />white-space: nowrap;
        <span
          style=" display: block; width:290px;height:30px;border:1px solid green;overflow:hidden;
          text-overflow: ellipsis;
white-space: nowrap;
           "
        >
          内容溢出了丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫
          丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫
        </span>
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">11.css伪类有哪些，伪元素有哪些？怎么设置伪类时的鼠标样式？</p>伪类：
        <br />
        a:link {color:#FF0000;} 未访问
        <br />
        a:visited {color:#00FF00;} 已访问
        <br />
        a:hover {color:#FF00FF;} 标划过
        <br />
        a:active {color:#0000FF;} 已选中
        <br />first-child匹配第一个元素
        <br />伪元素：
        <br />：before---元素之前插入内容
        <br />：after--元素后面插入内容
        <span style="display: block;
  " class="ming">伪类时候的鼠标样式</span>
      </div>
      <div>
        <p class="heiha">12.将这个图用精灵图方法拆成6个图标</p>
        <img src="./assets/图片1.png" alt />
        <p class="new" style="border:none;">
          <span class="jing k1"></span>
          <span class="jing k2"></span>
          <span class="jing k3"></span>
          <span class="jing k4"></span>
          <span class="jing k5"></span>
          <span class="jing k6"></span>
        </p>
      </div>
      <div>
        <p class="heiha">13.媒体查询怎么写？Css 2D、3D变换有哪些？</p>
        @media 媒体类型and （特性）{样式}
        <br />
        media screen and (min-width:900px){}
        <br />2D/3D:transform
        <br />
        <p class="zi zi1" style>
          移动：
          <br />translate(x, y)
        </p>
        <p class="zi zi2" style>
          缩放：
          <br />scale(x, y)
        </p>
        <p class="zi zi3" style>
          旋转：
          <br />rotate(deg)
        </p>
        <p class="zi zi4" style>
          倾斜：
          <br />skew(deg)
        </p>

        <p class="zi zi5" style>
          移动：
          <br />translate(x,y,z)
        </p>
        <p class="zi zi6" style>
          缩放：
          <br />scale(x,y,z)
        </p>
        <p class="zi zi7" style>
          旋转：
          <br />rotate(deg)
        </p>
        <p class="zi zi8" style>
          倾斜：无
          <br />skew(deg)
        </p>
      </div>
      <div>
        <p class="heiha">14.Css怎么设置阴影、圆角、缩放、旋转？</p>
        <p>阴影语法：box-shadow: h-shadow v-shadow blur spread color inset;</p>
        <p>圆角：border-radius：上/右/下/左</p>
        <p class="zi yin1">
          阴影
          <br />box-shadow:
        </p>
        <p class="zi yin2" style="line-height:20px">
          圆角
          <br />border-radius:
        </p>
        <p class="zi zi2" style>
          缩放：
          <br />scale(x, y)
        </p>
        <p class="zi zi3" style>
          旋转：
          <br />rotate(deg)
        </p>
      </div>
      <div>
        <p class="heiha">15.线性渐变怎么写，多个颜色的线性渐变怎么写？</p>
        <p>语法：background-image: linear-gradient(,);</p>
        <p class="xian h1"></p>
        <p class="xian h2"></p>
        <p class="xian h3"></p>
        <p class="xian h4"></p>
        <p class="xian h5"></p>
        <p class="xian h6"></p>
        <p class="xian h7"></p>
        <p class="xian h8"></p>
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">16.Css动画怎么写？写一个背景色变化过渡动画，写一个位移动画</p>
        <p>语法：animation: 名字 时间 方式 延迟 循环;</p>
        <p>
          @keyframes 名字{
          <br />
          0%{}
          <br />
          100%{}
        </p>
        <p class="bian guo">css变色动画</p>
        <p class="wei bian">css位移动画</p>
      </div>
      <div class="hav1">
        <p class="heiha">17.弹性盒子有哪些属性，意义是什么？</p>
        <p class="hav">
          弹性布局：display：flex;
          <br />属性-flex-direction值排列方向
          <br />row :从左到右的水平方向
          <br />row-reverse：从右到左的水平方向
          <br />column:从上到下的垂直方向
          <br />column-reverse从下到上的方向
          <br />属性-justify-content 子元素对齐方式
          <br />flex-start 主轴起点对齐
          <br />flex-end 主轴结束点对齐
          <br />center 在主轴中居中对齐
          <br />space-between 两端对齐
          <br />space-around 子元素间的距离相等
          <br />属性-align-items 子元素对齐的方式
          <br />stretch 填充整个容器
          <br />flex-start 侧轴的起点对齐
          <br />flex-end 侧轴的终点对齐
          <br />center 在侧轴中居中对齐
          <br />baseline 以子元素的第一行文字对齐
        </p>
      </div>
      <div>
        <p class="heiha">18.一个H5页面由哪几个基础的标签组成，分别做什么用,script标签有什么 ；</p>
        <p style="font-size:14px">
          article --标记定义一篇文章
          <br />header --定义一个页面或一个区域的头部
          <br />nav --定义导航链接
          <br />section --定义一个区域
          <br />aside --定义页面内容部分的侧边栏
          <br />hgroup --定义文件中一个区块的相关信息
          <br />figure --定义一组媒体内容及它们的标题
          <br />figcaption --定义 figure 元素的标题。
          <br />footer --定义一个页面或一个区域的底部
          <br />dialog --定义一个对话框
          <br />script标签:通常放置在一个网页的头部标签内的用于
          链接外部JS文件外部资源标签,script 标签最常见的用途是链接外部js，外部资源。
        </p>
      </div>
      <div>
        <p class="heiha">19.单引号‘’和双引号“”，有什么区别，使用规则？</p>区别：
        <br />单引号和双引号都可以表示一个字符串，二者在语法上没有区别。
        但从规范上说，一般的大部分规范中都要求使用单引号来引用字
        符串，这样做有一个好处，如果一个js的变量是一段html代码
        的字符串，html的属性在规范中是使用双引号，字符串使用单
        引号，字符串中的html属性就可以直接使用双引号而不用转义。
        规则：
        在同一行代码内外部使用单引号，则外部使用双引号，反之则反，是为了区别开来，
      </div>
      <div>
        <p class="heiha">20.代码注释方法有哪些，区别是什么？</p>(1) HTML : < 叹号--注释内容-->
        <br />(2) CSS:/* 注释内容*/
        <br />(3) JS: //注 释内容; 或者/* 注释内容 */,
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">21.什么是行元素、块元素，区别？</p>
        <p style="font-size:14px;">
          块级：
          <br />1.独占一行，宽度自动填满其父元素宽度
          <br />2.块级元素可以设置宽高
          <br />3.块级元素可以设置margin，padding
          <br />4.display:block;
          <br />行内：
          <br />1.同处一行，其宽度随内容的变化而变化。
          <br />2.行内元素不可以设置宽高
          <br />3.行内元素水平方向margin可生效。竖直方向不生效。
          <br />4.display:inline;
          <br />行级：
          <br />1.可以和其他元素处于一行，不用另起一行。
          <br />2.元素的高、宽及顶部和底部边距不可设置。
          <br />3.元素的宽度不可改变。
        </p>
      </div>
      <div>
        <p class="heiha">22.怎么用十六进制和rgb/rgba方式定义颜色，a是什么，怎么单独使用a？</p>
        <span style="font-size:12px;display:block">
          (1)十六进制
          <br />
          <p style=" color:#8e3939;">
            颜色依次为纯白：#ffffff;纯红：#ff0000;纯绿：#00ff00;纯蓝：#0000ff;
            #__ __ __ 这三个空白位置分别，代表red，green，blue要填写两位十六进制数。
            所以#ff 00 00 ,red部分为最大值ff，其余为0，代表红色最纯，绿色蓝色不上色。
            #fff ff ff ，红绿蓝三种纯色混合，产生白色，此处亦然。
          </p>(2)rgb
          <p style="  color:rgb(57, 223,90)">
            rgb(x，y，z)
            这三个参数是从0~255的十进制数，和十六进制色表示原理基本一致，
          </p>(3)rgba
          <p style="color: rgba(200, 60, 30, 0.3)">
            rgba(x，y，z，a)
            与rgb类似，其中代表元素的透明度0-1为取值范围，透明度作用于颜色和背景
          </p>
        </span>
      </div>
      <div>
        <p class="heiha">23.一个url都由哪几部分组成？</p>例如：
        <a>https://www.baidu.com</a>

        <br />第一部分是协议(或称为服务方式);
        <br />第二部分是存有该资源的主机IP地址(有时也包括端口号);
        <br />第三部分是主机资源的具体地址，如目录和文件名等。
        <br />第一部分和第二部分之间用“：//”符号隔开，第二部分和第三部分用“/”符号隔开。第一部分和第二部分是不可缺少的，第三部分有时可以省略。
      </div>
      <div class="hav1">
        <p class="heiha">24.H5 web 存储有哪些，怎么用？</p>
        <p class="hav">
          (1)cookies:
          <br />h5之前，存储主要是用cookies。cookies缺点有在请求头上带着数据，大小是4k之内。主Domain污染。
          主要应用：购物车、客户登录
          对于IE浏览器有UserData，大小是64k,只有IE浏览器支持。
          <br />(2)localstorage:
          <br />存储方式：
          <br />以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。
          大小为
          每个域名5M
          <br />(3)sessionstorage:
          <br />HTML5 的本地存储 API 中的 localStorage 与 sessionStorage
          在使用方法上是相同的，区别在于 sessionStorage 在关闭页面
          后即被清空，而 localStorage 则会一直保存。
          <br />用法：
          <br />保存数据：localStorage.setItem(key,value);
          <br />读取数据：localStorage.getItem(key);
          <br />删除单个数据：localStorage.removeItem(key);
          <br />删除所有数据：localStorage.clear();
          <br />得到某个索引的key：localStorage.key(index);
        </p>
      </div>
      <div class="hav1">
        <p class="heiha">25.http请求方式有哪些，使用场景是什么？ 常用的HTTP 状态码有哪些，意义是什么？</p>
        <p class="hav">
          GET:
          <br />GET请求是向服务端请求获取某个或某些资源（resource），查询数据库单个或list数据，服务端成功的话，一般状态码返回200。
          <br />POST:
          <br />POST请求是用来向服务端请求新增资源（resource），处理成功的话，服务端一般返回状态码201。
          <br />PUT:
          <br />PUT请求一般是用来向服务端请求修改某个已存在的资源（resource）,服务端一般返回状态码200，204等。
          <br />DELETE:
          <br />DELETE请求一般是用来向服务端请求删除某个已存在的资源（resource），服务端一般返回200，202等。
          <br />PATCH:
          <br />PATCH请求一般是对某个资源做局部修改,如个别字段。
          <br />状态码：
          <br />1XX Informational（信息性状态码） 接受的请求正在处理
          <br />2XX Success（成功状态码） 请求正常处理完毕
          <br />3XX Redirection（重定向状态码） 需要进行附加操作以完成请求
          <br />4XX Client Error（客户端错误状态码） 服务器无法处理请求
          <br />5XX Server Error（服务器错误状态码） 服务器处理请求出错
        </p>
      </div>
    </div>

    <div class="new">
      <div class="hav1">
        <p class="heiha">
          26.p、a、div、hr、ul、li、span、br、
          title、 style、 meta、 link、 script、img、
          table、th、tr、td、form、input、textarea、
          radio、checkbox、label、select标签各是什么，怎么用？
        </p>
        <p class="hav hav2">
          p--文本块级标签--直接写入内容
          <br />a--指定w3c超链接--href导入地址
          <br />div--块级无样式--随意使用
          <br />hr--水平分隔线--需要水平线的位置放hr
          <br />ul--标签定义无序列表--与li同用
          <br />li--标签定义列表项目--与ul同用
          <br />span--行级标签--可插入图片文本
          <br />br--换行标签--需要换行时候用
          <br />title--标题标签--写页面前定义题目
          <br />style--行内写css样式--此标签内写入样式
          <br />meta--提供有关页面的元信息--不包含内容
          <br />link--链接一个外部样式表--导入外部资源
          <br />script--写逻辑标签--写逻辑代码
          <br />img--图片标签--行内插入图片src
          <br />table--标签定义 HTML 表格--写入表头信息
          <span class="yin">
            <br />th--表头单元格--写入数据
            <br />tr--定义表格中的行--table内包住th，td
            <br />td--标准单元格--写入内容
            <br />form--为用户输入创建 HTML 表单--向服务器传输数据
            <br />input--输入框--单选框，复选框，按钮，文本框
            <br />textarea--定义多行的文本输入控件--通过cols和rows规定尺寸
            <br />radio--单选按钮--type内输入radio实现单选
            <br />checkbox--复选框--type内输入checkbox实现复选框
            <br />label--标签为input元素定义标注--触发控件
            <br />select--表单控件，单选复选--结合option使用
          </span>
        </p>
      </div>
      <div class="hav1">
        <p class="heiha">27.查找元素的方法有哪些？怎么创建、添加、删除、替换元素？</p>
        <p class="hav">
          查找元素：
          <br />getElementsByName()--通过name名查找
          <br />getElementsByTagName()--通过标签查找
          <br />getElementsByClassName()--通过类名查找
          <br />getElementById()--通过id名查找
          <br />
          <br />1、创建元素节点：createElement
          <br />用法：document.createElement("p");
          <br />创建文本节点：createTextNode;
          <br />用法：document.createTextNode("txt");
          <br />2、插入节点：appendchild:在要插入的元素节点上调用，他插入指定的节点使其成为那个节点的最后一个子节点。
          <br />insertBefore:在已有的元素前插入一个新元素；
          <br />insertAfter:在现有的元素后面插入一个新元素；
          <br />3、删除节点：removeChild;从文档树中删除一个节点
          <br />用法：var para1=document.getElementById("p1");
          <br />para1.parentNode.removeChild(para1);
          <br />4、替换节点：replaceChild;将一个节点替换为另一个节点
        </p>
      </div>
      <div>
        <p class="heiha">28.DOM的意义？</p>DOM是文档对象模型，dom把网页中的内容与元素呈现的清晰，任何一个
        元素或者内容都有自己的节点，对开发人员来说是索引目录，通过dom。可以访问html内
        所有内容。
      </div>
      <div>
        <p class="heiha">29.怎么用DOM方法修改元素样式？</p>通过获取dom节点： 获取id
        <br />document.getElementById("yang").
        <br />style.backgroundColor = "white";
        <br />document.getElementById("yang")
        <br />.style.height = "120px";
        <p id="yang" @click="bian()">修改样式</p>
      </div>
      <div>
        <p class="heiha">30.Undefined 和 Null怎么区分，理解？</p>Undefined：定义了一个变量却没有赋值；
        <br />null：表示空，此处没有值；
      </div>
    </div>

    <div class="new">
      <div>
        <p class="heiha">31.定义变量的方式（关键字）有哪些？区别、意义是什么？怎么同时定义多个变量？</p>(1)var:定义的变量可以被修改，如果没有初始化会输出undefind，不报错，会产生变量提升；
        <br />(2)let：块级作用域，使用它会形成暂时性死区，对函数外面没有影响；
        <br />(3)const：常量变量，定义的变量无法修改；
        <br />同时定义多各变量：
        <br />逗号隔开变量即可，例如：var a=10，b=20，c=30
      </div>
      <div>
        <p class="heiha">32.JavaScript 语句标识符有哪些，意义、作用，写出来例子？</p>(1)break：跳出循环
        <br />(2)continue：跳出当前，进入下一个
        <br />(3)if...else：不同条件实现不同效果
        <br />(4)return:退出函数
        <br />(5)var:定义变量
        <br />(6)function:定义一个函数
      </div>
      <div>
        <p class="heiha">33.js代码规范中，重点有哪些？</p>(1)写注释
        <br />(2)for循环条件内不能有dom
        <br />(3)减少全局污染
        <br />(4)用===替换==
        <br />(5)命名规范
      </div>
      <div>
        <p class="heiha">34.Js数据类型有哪些，意义、怎么创建？数据操作符、逻辑操作符有哪些？</p>(1)基本类型：string、number、boolean、undefined、null
        <br />(2)引用类型：object、function、array
        <br />(3)ES6新类型：symbol。类似于数组
        <br />
        <br />算术运算符:+ 、 – 、* 、 / 、 % 、 -(一元取反) 、 ++ 、 —
        <br />等同运算符与全同运算符:== 、 ===、 !== 、 !===
        <br />比较运算符:< 、 > 、 <= 、 >=
        <br />字符串运算符::< 、 > 、 <= 、 >= 、 = 、 +
        <br />逻辑运算符:&& 、 ||、 !、
        <br />赋值运算符:=、 +=、 *=、 -=、 /=
      </div>
      <div>
        <p class="heiha">35.完事了完事了完事了完事了完事了完事了</p>
      </div>
    </div>
  </div>
</template>

<script>
import child from "./components/child";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";
export default {
  name: "app",
  components: {
    child
  },

  data() {
    return {
      nameList: ["css", "js", "route", "vuex"],
      // pathList: ["/css", "/js", "/route", "/vuex"]
      duixiang: {
        name: "我是爸爸111111"
      }
    };
  },
  methods: {
    // 使用路由name属性跳转
    Route(name) {
      this.$router.push({ name: name });
    },
    showchild(data) {
      console.log(data);
    },

    // 使用路由path属性跳转
    // Route2(path) {
    //   this.$router.push({ path: path });
    // }
    bian() {
      document.getElementById("yang").style.backgroundColor = "white";
      document.getElementById("yang").style.height = "120px";
    }
  }
};
</script>
<style>
.vueblog-font {
  font-family: vueblog;
}
p {
  margin: 5px 0;
}
button {
  margin-right: 10px;
  padding: 2px 15px;
  font-size: 16px;
}
.new {
  border-top: 2px solid black;
  display: flex;
  justify-content: flex-start;
}
.new > div {
  border: 1px solid black;
  width: 20%;
}
.heiha {
  color: red;
}
table {
  margin: 0 auto;
  width: 300px;
  border: 1px solid red;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  border: 1px solid green;
}
.ming {
  width: 200px;
  height: 30px;
  border: 1px solid green;
}
.ming:hover {
  cursor: pointer;
}
.jing {
  width: 46px;
  height: 44px;
  background: url("./assets/图片1.png") no-repeat;
  display: block;
  margin-left: 2px;
}
.k1 {
  background-position: 0px 0px;
}
.k2 {
  background-position: 0px -45px;
}
.k3 {
  width: 42px;
  background-position: -47px 0px;
}
.k4 {
  width: 42px;
  background-position: -47px -45px;
}
.k5 {
  width: 42px;
  background-position: -91px 0px;
}
.k6 {
  width: 42px;
  background-position: -91px -45px;
}
.zi {
  width: 65px;
  height: 65px;
  background: green;
  border: 1px solid black;
  text-align: center;
  line-height: 30px;
  font-size: 5px;
  float: left;
  margin-left: 4px;
}
.zi1:hover {
  transform: translate(10px);
}
.zi2:hover {
  transform: scale(0.5);
}
.zi3:hover {
  transform: rotate(30deg);
}
.zi4:hover {
  transform: skew(13deg);
}
.zi5:hover {
  transform: translate3d(5px, 5px, 6px);
}
.zi6:hover {
  transform: scale3d(2, 2, 2);
}
.zi7:hover {
  transform: rotate3d(10, 10, 10, 30deg);
}
.zi8:hover {
}
.yin1 {
  box-shadow: 10px 10px 5px #888888;
}
.yin2 {
  border-radius: 20px;
}
.xian {
  width: 65px;
  height: 65px;
  border: 3px groove rgba(200, 60, 30, 0.8);
  text-align: center;
  line-height: 30px;
  font-size: 5px;
  float: left;
  margin-left: 3px;
}
.h1 {
  background-image: linear-gradient(red, blue);
}
.h2 {
  background-image: repeating-linear-gradient(
    30deg,
    orange 3px,
    red 22px
  ); /*重复渐变*/
}
.h3 {
  background-image: linear-gradient(
    60deg,
    red 30px,
    blue 80px,
    green 120px,
    orange 300px
  ); /*百分比与像素都可以*/
}
.h4 {
  background-image: radial-gradient(
    ellipse,
    red 3px,
    blue 8px,
    green 12px,
    orange 30px
  ); /*椭圆*/
}
.h5 {
  background-image: radial-gradient(red, blue);
}
.h6 {
  background-image: radial-gradient(circle at top, red, blue, orange);
}
.h7 {
  background-image: repeating-radial-gradient(
    circle,
    orange 7px,
    red 30px
  ); /*重复渐变*/
}
.h8 {
  background-image: radial-gradient(
    circle closest-side,
    red,
    blue,
    orange
  ); /*重复渐变*/
}
.bian {
  width: 100px;
  height: 80px;
  background: darkgray;
  text-align: center;
  line-height: 70px;
  border: 3px groove goldenrod;
  border-radius: 20px;
  font-size: 5px;
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
}
.guo {
  animation: guo 3s ease 0s infinite;
}
.wei {
  animation: wei 3s ease-in infinite;
}
@keyframes guo {
  0% {
  }
  20% {
    background: honeydew;
  }
  50% {
    background: sandybrown;
  }
  70% {
    background: goldenrod;
  }
  75% {
    background: olive;
  }
  100% {
    background: cadetblue;
  }
}
@keyframes wei {
  0% {
    transform: translateX(20px) rotate(30deg);
  }
  20% {
    transform: translateY(-30px) scale(0.8);
  }
  50% {
    background: saddlebrown;
    transform: translate(10px);
  }
  75% {
    transform: rotate(-30deg);
  }
  100% {
    transform: translate3d(10px, 10px, 10px);
  }
}
.hav {
  font-size: 10px;
}
.hav1:hover .hav {
  font-size: 15px;
}
.yin {
  display: none;
}
.hav2:hover .yin {
  display: block;
}
#yang {
  width: 200px;
  height: 80px;
  background: bisque;
  border: 4px groove sandybrown;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 20px;
  text-align: center;
  line-height: 80px;
}
</style>

