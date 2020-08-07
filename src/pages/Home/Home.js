import React, { Component } from 'react'

import { SearchBar} from 'antd-mobile';
export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="logo">
                    <div className='img'>
                        <img src="" alt="" />
                    </div>
                    <div className="search">
                        <SearchBar placeholder="寻找商品" maxLength={8} />
                    </div>
                </div>
            </div>
        )
    }
}
