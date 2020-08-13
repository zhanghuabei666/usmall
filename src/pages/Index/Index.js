import React, { Component } from 'react'

import { Switch,  Redirect} from 'react-router-dom'
import './Index.css'
// 引入路由
import Home from '../../pages/Home/Home'
import Fenlei from '../../pages/Fenlei/Fenlei'
import Cart from '../../pages/Cart/Cart'
import Main from '../../pages/Main/Main'
import Footer from './components/Footer/Footer'
import MyRoute from '../MyRoute/MyRoute'
export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                <div className="index_top">
                    <Switch>
                        <MyRoute path='/index/home' component={Home}></MyRoute>
                        <MyRoute path='/index/fenlei' component={Fenlei}></MyRoute>
                        <MyRoute path='/index/cart' component={Cart}></MyRoute>
                        <MyRoute path='/index/main' component={Main}></MyRoute>
                        <Redirect to='/index/home'></Redirect>
                    </Switch>
                </div>
                <Footer path={this.props.location.pathname}></Footer>
            </div>
        )
    }
}
