import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cartlist, requestCartlistAction,requestCarteditAction } from '../../store/index'
import {getCartedit} from '../../util/request'
import './Cart.css'
// 引入图片
import editor_nor from '../../assets/img/editor_nor.png'
import editor_hig from '../../assets/img/editor_hig.png'
import store from '../../assets/img/store.png'
import radio_nor from '../../assets/img/radio_nor.png'
import radio_hig from '../../assets/img/radio_hig.png'


class Cart extends Component {
    componentDidMount() {
        // 一进页面就发起请求  
        let id = "df64e090-d641-11ea-9a11-358a1b0f30dc"
        this.props.requestList(id);
    }
    // 增加
    changeNum(id,type,num){
        if(num<=1&&type===1){
            return
        }
        getCartedit({id,type})
        let fid = "df64e090-d641-11ea-9a11-358a1b0f30dc"
        this.props.requestList(fid);
    }

    render() {
        const { cartlist} = this.props;
        return (
            <div className='cart'>
                <h3>购物车</h3>
                <div className='lists'>
                    {
                        cartlist.map((item, index) => {
                            return <table className='tables' key={item.id}>
                                <tbody>
                                    <tr className='tr1'>
                                        <th className='th1' colSpan="4"><img src={store} alt="" /><em>杭州办税区仓</em></th>
                                    </tr>
                                    <tr className='tr2'>
                                        <th className='th1'><img src={radio_nor} alt="" /><input type="checkbox" /></th>
                                        <th className='th2'><img src={item.img} alt="" /></th>
                                        <th className='th3'>
                                            <p className='p1'>{item.goodsname}</p>
                                            <p className='p2'>
                                                <button onClick={()=>this.changeNum(item.id,1,item.num)}>-</button>
                                                <button>{item.num}</button>
                                                <button onClick={()=>this.changeNum(item.id,2,item.num)}>+</button>
                                            </p>
                                            <em>总价：{item.num * item.price}</em>
                                        </th>
                                        <th className='th4'>{"￥" + item.price}</th>
                                    </tr>
                                </tbody>
                            </table>
                        })
                    }
                </div>
                <footer className='footers'>
                    <table className='tables'>
                        <tbody>
                            <tr className='tr'>
                                <th className='th1'><img src={radio_nor} alt="" /><input type="checkbox" /><em>全选</em></th>
                                <th className='th2'><img src={editor_nor} alt="" /><em>编辑</em></th>
                                <th className='th3'>
                                    <p className='p1'>合计:0.00</p>
                                    <p className='p2'>（不含运费）</p>
                                </th>
                                <th className="th4">
                                    <button>去结算</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>

                </footer>
            </div>
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    return {
        cartlist: cartlist(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: (id) => dispatch(requestCartlistAction(id))
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


