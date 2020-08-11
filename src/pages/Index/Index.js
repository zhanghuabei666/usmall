import React, { Component } from 'react'

import { Switch, Route, Redirect} from 'react-router-dom'
import './Index.css'
// 引入路由
import Home from '../../pages/Home/Home'
import Fenlei from '../../pages/Fenlei/Fenlei'
import Cart from '../../pages/Cart/Cart'
import Main from '../../pages/Main/Main'
import Footer from './components/Footer/Footer'
export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                <div className="index_top">
                    <Switch>
                        <Route path='/index/home' component={Home}></Route>
                        <Route path='/index/fenlei' component={Fenlei}></Route>
                        <Route path='/index/cart' component={Cart}></Route>
                        <Route path='/index/main' component={Main}></Route>
                        <Redirect to='/index/home'></Redirect>
                    </Switch>
                </div>
                <Footer path={this.props.location.pathname}></Footer>
            </div>
        )
    }
}
