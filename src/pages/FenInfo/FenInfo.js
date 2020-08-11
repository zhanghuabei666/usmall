import React, { Component } from 'react'
import { connect } from 'react-redux'
import querystring from 'querystring'
import { goods, requestGoodsAction } from '../../store/index'
import './FenInfo.css'
import Goback  from '../../components/GoBack/GoBack.js'
// 引入filter
import { filterPrice } from '../../filters/filters'

class FenInfo extends Component {
    componentDidMount() {
        const result = querystring.parse(this.props.location.search.slice(1));
        // 一进页面就发起请求   
        this.props.requestList(result.id);
    }
    detail(id){
        this.props.history.push('/detail?id='+id)
    }
    render() {
        const { goods, location } = this.props;
        const name = querystring.parse(location.search.slice(1));
        return (
            <div>
                <h3>{name.name}</h3>
                <span className='goback'><Goback></Goback></span>
                <ul className='ulList'>
                    {
                        goods === null ? null : goods.map(item => {
                            return <li key={item.id} onClick={()=>this.detail(item.id)}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p className='name'>{item.goodsname}</p>
                                    <p className='plirce'>￥{filterPrice(item.price)}</p>
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


