import React, { Component } from 'react'
import { connect } from 'react-redux'
import querystring from 'querystring'
import { goodsinfo, requestGoodsinfoAction } from '../../store/index'
import './Detail.css'
import Goback from '../../components/GoBack/GoBack.js'
import { Modal, List, Button,Toast } from 'antd-mobile';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

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
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() {
        const { goodsinfo } = this.props;
        // 判断是否有数据
        if (!goodsinfo.length) {
            return (<div></div>)
        }
        // 将参数转数组
        let arr = JSON.parse(goodsinfo[0].specsattr)
        return (
            <div className='detail'>
                <h3>商品详情</h3>
                <span className='goback'><Goback></Goback></span>

                <div dangerouslySetInnerHTML={{ __html: goodsinfo[0].description }} className='detail1'></div>
                <footer className='footer'>
                    <button className='btn' onClick={this.showModal('modal2')}>加入购物车</button>
                </footer>
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    afterClose={() => { Toast.info("添加成功", 1); }}
                >
                    <List className="popup-list">
                        <List.Item><img src={goodsinfo[0].img} />
                            <i>{goodsinfo[0].goodsname}</i></List.Item>
                        <List.Item> <h4>{goodsinfo[0].specsname}</h4></List.Item>
                        <List.Item>{
                            arr.map(item => {
                                return <em key={item}>{item}</em>
                            })
                        }</List.Item>
                        <List.Item>
                            <Button  onClick={this.onClose('modal2')} className='btn1'>加入购物车</Button>
                        </List.Item>
                    </List>
                </Modal>
            </div>
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    console.log(state);
    return {
        goodsinfo: goodsinfo(state)
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


