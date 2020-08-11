import React, { Component } from 'react'
import './Home.css'
import src from '../../assets/img/img/home/logo.jpg'
import { SearchBar } from 'antd-mobile';

// 引入组件
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import List from './components/List/List'
export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='home'>
                <div className="logo">
                    <div className='img'>
                        <img src={src} alt="" />
                    </div>
                    <div className="search">
                        <SearchBar placeholder="寻找商品" maxLength={8} />
                    </div>
                </div>
                <div className="banner">
                    <Banner></Banner>
                    <Nav></Nav>
                    <List {...this.props}></List>
                </div>
            </div>

        )
    }
}
