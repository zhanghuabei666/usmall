import React, { Component } from 'react'
import src from '../../../../assets/img/img/home/1.jpg'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return (
            <ul className='nav'>
                <li>
                    <img src={src} alt=""/>
                    <p>限时抢购</p>
                </li>
                <li>
                    <img src={src} alt=""/>
                    <p>积分商城</p>
                </li>
                <li>
                    <img src={src} alt=""/>
                    <p>联系我们</p>
                </li>
                <li>
                    <img src={src} alt=""/>
                    <p>商品分类</p>
                </li>
            </ul>
        )
    }
}
