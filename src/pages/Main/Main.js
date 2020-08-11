import React, { Component } from 'react'
import { Badge } from 'antd-mobile';
import './Main.css'
// 引入图片
import a1 from '../../assets/img/set.png'
import a2 from '../../assets/img/news.png'
import user from '../../assets/img/1.jpg'
import keep from '../../assets/img/keep.png'
import boligation from '../../assets/img/icon_boligation.png'
import consignee from '../../assets/img/icon_consignee.png'
import evaluate from '../../assets/img/icon_evaluate.png'
import refund from '../../assets/img/icon_refund.png'

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <header>
                    <h4>个人中心</h4>
                    <a className='a1' href="#/index/main"><img src={a1} alt="" /></a>
                    <a className='a2' href="#/index/main"><img src={a2} alt="" /></a>
                    <em><Badge text="9+" hot /></em>
                </header>
                <div className="user">
                    <img src={user} alt="" />
                    <p>小不点</p>
                </div>
                <div className="collect">
                    <img src={keep} alt="" />
                    <span className='collection'>我的收藏（5）</span>
                </div>
                <div className="nav">
                    <div className="navBar">
                        <span className="aa order">我的订单</span>
                        <span className="aa">查看订单</span>
                    </div>
                    <ul className="navList">
                        <li>
                        <p><img src={refund} alt="" /></p>
                            <p className='lists'>待付款</p>
                            <em><Badge text="9+" hot /></em>
                        </li>
                        <li>
                        <p><img src={consignee} alt="" /></p>
                            <p className='lists'>待发货</p>
                            <em><Badge text="9+" hot /></em>
                        </li>
                        <li>
                        <p><img src={evaluate} alt="" /></p>
                            <p className='lists'>待收货</p>
                            <em><Badge text="9+" hot /></em>
                        </li>
                        <li>
                            <p><img src={boligation} alt="" /></p>
                            <p className='lists'>收藏</p>
                            <em><Badge text="9+" hot /></em>
                        </li>
                        
                    </ul>
                </div>
                <div className="address">
                    收货地址管理
                </div>
            </div>
        )
    }
}
