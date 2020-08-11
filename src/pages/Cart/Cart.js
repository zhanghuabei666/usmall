import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cartlist, requestCartlistAction, changeIsAllAction, isEditor, changeIsEditorAction, isAll,changeOneAction,requestEditAction,requestDelAction,getAllPrice,getUser} from '../../store/index'
import { Toast} from 'antd-mobile';
import './Cart.css'
// 引入filter
import { filterPrice } from '../../filters/filters'
// 引入图片
import editor_nor from '../../assets/img/editor_nor.png'
import editor_hig from '../../assets/img/editor_hig.png'
import store from '../../assets/img/store.png'
import radio_nor from '../../assets/img/radio_nor.png'
import radio_hig from '../../assets/img/radio_hig.png'


class Cart extends Component {
    componentDidMount() {
        // 一进页面就发起请求  
        this.props.requestList(this.props.getUser.uid);
    }
    // 减少
    sub(item) {
        if (item.num <= 1) {
            Toast.info('宝贝不能再少了', 1);
            return
        }
        this.props.requestEditAction({ id: item.id, type:1 })
        this.props.requestList(this.props.getUser.uid)
    }
    
    add(item,type){
        this.props.requestEditAction({ id: item.id, type })
        this.props.requestList(this.props.getUser.uid)
    }
    render() {
        const { cartlist, changeIsEditor, isAll, isEditor, changeIsAll,changeOne,requestDelAction,getAllPrice, } = this.props;

        // 计算总价
        let allPrice = 0;
        cartlist.forEach(item => {
            allPrice += item.price * item.num
        })

        return (
            <div className='cart'>
                <h3>购物车</h3>
                <div className='lists inner'>
                    {
                        cartlist.map((item, index) => {
                            return <table className='tables' key={item.id}>
                                <tbody>
                                    <tr className='tr1'>
                                        <th className='th1' colSpan="4">
                                            <img src={store} alt="" />
                                            <em>杭州办税区仓</em>
                                        </th>
                                    </tr>
                                    <tr className='tr2'>
                                        <th className='th1'>
                                            <img src={item.checked ? radio_hig : radio_nor} onClick={() => changeOne(index)} alt="" />
                                        </th>
                                        <th className='th2'>
                                            <img src={item.img} alt="" />
                                        </th>
                                        <th className='th3'>
                                            <p className='p1'>{item.goodsname}</p>
                                            <p className='p2'>
                                                <button onClick={() => this.sub(item)}>-</button>
                                                <button>{item.num}</button>
                                                <button onClick={() => this.add(item,2)}>+</button>
                                            </p>
                                            <em>总价：{filterPrice(item.num * item.price)}</em>
                                        </th>
                                        <th className='th4'>{"￥" + filterPrice(item.price)}</th>
                                        <th className={!isEditor ? 'th5' : 'th55'}><div className="shop-item-del" onClick={()=>requestDelAction(item.id)} >删除</div></th>
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
                                <th className='th1' onClick={() => changeIsAll()}><img src={isAll ? radio_hig : radio_nor} alt="" /><em>全选</em></th>
                                <th className='th2' onClick={() => changeIsEditor()}>
                                    <img src={isEditor ? editor_hig : editor_nor} alt="" />
                                    <em>编辑</em>
                                </th>
                                <th className='th3'>
                                    <p className='p1'>合计:{filterPrice(getAllPrice)}</p>
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
        getUser:getUser(state),
        cartlist: cartlist(state),
        isEditor: isEditor(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: (id) => dispatch(requestCartlistAction(id)),
        changeIsEditor: () => dispatch(changeIsEditorAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),
        changeOne: (index) => dispatch(changeOneAction(index)),requestEditAction: (data) => dispatch(requestEditAction(data)),
        requestDelAction: id => dispatch(requestDelAction(id))
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


