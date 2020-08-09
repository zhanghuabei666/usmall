import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux"
import store from "./store/index"
// 定一路有模式
import { HashRouter } from 'react-router-dom'
// 引入reset.css
import './assets/css/reset.css'
// 引入rem.js
import './assets/js/rem.js'

// 引入UI框架css
import 'antd-mobile/dist/antd-mobile.css';

// 给图片添加端口
Component.prototype.$img = "http://localhost:3000"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

