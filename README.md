# react
* 是一个用于构建用户界面的js库
![](./noteimage/react.png)
* 特点： 声明式，基于组件，学习一次，随处使用
![](/noteimage/%E5%A3%B0%E6%98%8E%E5%BC%8F.png)
![](./noteimage/%E5%9F%BA%E4%BA%8E%E7%BB%84%E4%BB%B6.png)
![](./noteimage/%E9%9A%8F%E5%A4%84%E7%94%A8.png)

##### react使用
![](./noteimage/react%E4%BD%BF%E7%94%A8.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>react基本使用</title>
</head>

<body>

    <div id="root"></div>
    <!-- 1.引入js文件 -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

    <script>
        // 2.创建react元素
        // 参数一：元素名称
        // 参数二：元素属性
        // 参数三： 元素的子节点
        const title = React.createElement('h1', null, 'Hello React')

        // 3 渲染react元素
        //参数一：要渲染的react元素
        //参数二：挂载点
        ReactDOM.render(title, document.getElementById('root'))
    </script>
</body>

</html>
```
