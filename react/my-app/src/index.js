// // 1. 导入react
// import React from 'react'
// import ReactDOM from 'react-dom'

// //2.创建react元素
// const title = React.createElement('h1', null, 'Hello react!')

// //3.渲染react元素
// ReactDOM.render(title, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

// //使用jsx创建react元素
// const title =(<h1 className='title'> hello jsx <span/> </h1>)

//     //渲染
//     ReactDOM.render(title, document.getElementById('root'))


// jsx中使用js表达式
const name = 'MJ'
const age =19

const title = (
    <h1>
        Hello JSX, {name}, 年龄：{age}
    </h1>
)

//渲染react元素
ReactDOM.render(title,document.getElementById('root'))
