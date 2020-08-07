import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 定一路有模式
import { HashRouter} from 'react-router-dom'
// 引入reset.css
import './assets/css/reset.css'
// 引入rem.js
import './assets/js/rem.js'

// 引入UI框架css
import 'antd-mobile/dist/antd-mobile.css'; 
// Component.prototype.$img="http://localhost:3000"
ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>,

  document.getElementById('root')
);

