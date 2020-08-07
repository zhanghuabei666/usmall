import React, { Component } from 'react'

import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
// 引入路由
import Home from '../../pages/Home/Home'
import Fenlei from '../../pages/Fenlei/Fenlei'
import Cart from '../../pages/Cart/Cart'
import Main from '../../pages/Main/Main'
// 引入css
import './Index.css'
export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                <div className="index_top">
                    <Switch>
                        <Route path='/index/home' component={Home}></Route>
                        <Route path='/index/home' component={Home}></Route>
                        <Route path='/index/home' component={Home}></Route>
                        <Route path='/index/home' component={Home}></Route>
                        <Route path='/index/fenlei' component={Fenlei}></Route>
                        <Route path='/index/cart' component={Cart}></Route>
                        <Route path='/index/main' component={Main}></Route>
                        <Redirect to='/index/home'></Redirect>
                    </Switch>
                </div>
                <footer>
                    <NavLink to='/index/home' activeClassName='active'>首页</NavLink>
                    <NavLink to='/index/fenlei' activeClassName='active'>分类</NavLink>
                    <NavLink to='/index/cart' activeClassName='active'>购物车</NavLink>
                    <NavLink to='/index/main' activeClassName='active'>我的</NavLink>
                </footer>
            </div>
        )
    }
}
