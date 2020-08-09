import React, { Component } from 'react'
import { connect } from 'react-redux'
import { indexgoods, requestIndexGoodsAction } from '../../../../store/index'
import './List.css'
class List extends Component {
    componentDidMount() {
        // 一进页面就发起请求   
        this.props.requestList();
    }
    render() {
        const [indexgoods] = this.props.indexgoods;
        function objOfValueToArr(object) {
            var arr = [];
            var i = 0;
            for (var item in object) {
                arr[i] = object[item];
                i++;
            }
            return arr;
        }
        let lists = indexgoods === undefined ? null : objOfValueToArr(indexgoods)[0];
        return (
            <ul className='ulList'>
                {
                    lists === null ? null : lists.map(item => {
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
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    console.log(state);
    return {
        indexgoods: indexgoods(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: () => dispatch(requestIndexGoodsAction())
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(List)

