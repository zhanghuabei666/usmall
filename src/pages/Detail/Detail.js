import React, { Component } from 'react'
import { connect } from 'react-redux'
import querystring from 'querystring'
import { goodsinfo, requestGoodsinfoAction,getUser } from '../../store/index'
import './Detail.css'
import { getCartadd } from '../../util/request'
import Goback from '../../components/GoBack/GoBack.js'
import { Modal, List, Button, Toast,Tag } from 'antd-mobile';
// 引入图片
import shopping_hig from '../../assets/img/tab_shopping_hig.png'
import shopping_nor from '../../assets/img/tab_shopping_nor.png'
// 引入filter
import { filterPrice } from '../../filters/filters'


class Detail extends Component {
    componentDidMount() {
        const result = querystring.parse(this.props.location.search.slice(1));
        // 一进页面就发起请求   
        this.props.requestList(result.id);
    }
    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
        };
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = (key) => () => {
        this.setState({
            [key]: false,
        });
    }
    onClose1 = (key, id) => (e) => {
        // e.preventDefault(); // 修复 Android 上点击穿透
        // e.stopPropagation()
        this.setState({
            [key]: false,
        });
        getCartadd({uid:this.props.getUser.uid,goodsid:id,num:1}).then(res => {
            if (res.data.code === 200) {
                Toast.info(res.data.msg, 1);
            } else {
                Toast.info(res.data.msg, 1);
            }
        })
    }
    render() {
        const { goodsinfo } = this.props;
        let info =goodsinfo[0]; 
        // 判断是否有数据
        if (!goodsinfo.length) {
            return (<div></div>)
        }
        // 将参数转数组
        let arr = JSON.parse(info.specsattr)
        return (
            <div className='detail'>
                <h3>商品详情</h3>
                <span className='goback'><Goback></Goback></span>
                <div className="show">
                    <img src={info.img} alt="" className='img'/>
                    <p className='names'>{info.goodsname}<span className='collect'><em>收藏</em><img src={shopping_nor} alt=""/></span></p>
                    <span className="price">￥{filterPrice(info.price)}</span>
                    <span className='trait'><em className={info.ishot===1?'em2':'em1'}>热卖</em><em className={info.isnew===1?'em2':'em1'}>新品</em></span>
                    <span className="price1">￥{filterPrice(info.market_price)}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: info.description }} className='detail1'></div>
                <footer className='footer'>
                    <button className='btn' onClick={this.showModal('modal2')}>加入购物车</button>
                </footer>
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                >
                    <List className="popup-list">
                        <List.Item><img src={info.img} />
                            <i>{info.goodsname}</i></List.Item>
                        <List.Item> <h4>{info.specsname}</h4></List.Item>
                        <List.Item>{
                            arr.map(item => {
                                return <Tag data-seed="logId" key={item}>{item}</Tag >
                            })
                        }</List.Item>
                        <List.Item>
                            <Button onClickCapture={this.onClose1('modal2', info.id)} className='btn1'>加入购物车</Button>
                        </List.Item>
                    </List>
                </Modal>
            </div>
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    return {
        goodsinfo: goodsinfo(state),
        getUser:getUser(state),
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: (id) => dispatch(requestGoodsinfoAction(id))
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(Detail)


