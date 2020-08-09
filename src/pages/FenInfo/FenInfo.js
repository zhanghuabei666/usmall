import React, { Component } from 'react'
import { connect } from 'react-redux'
import querystring from 'querystring'
import { goods, requestGoodsAction } from '../../store/index'
import './FenInfo.css'
import Goback  from '../../components/GoBack/GoBack.js'


class FenInfo extends Component {
    componentDidMount() {
        const result = querystring.parse(this.props.location.search.slice(1));
        // 一进页面就发起请求   
        this.props.requestList(result.id);
    }
    render() {
        const { goods, location } = this.props;
        console.log(location);
        const name = querystring.parse(location.search.slice(1));
        console.log(name);
        return (
            <div>
                <h3>{name.name}</h3>
                <span className='goback'><Goback></Goback></span>
                <ul className='ulList'>

                    {
                        goods === null ? null : goods.map(item => {
                            return <li key={item.id}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p className='name'>{item.goodsname}</p>
                                    <p className='plirce'>￥{item.price}</p>
                                    <span>立刻抢购</span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    console.log(state);
    return {
        goods: goods(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: (id) => dispatch(requestGoodsAction(id))
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(FenInfo)


