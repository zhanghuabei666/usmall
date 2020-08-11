import React, { Component } from 'react'
import { connect } from 'react-redux'
import querystring from 'querystring'
import { indexgoods, requestIndexGoodsAction } from '../../../../store/index'
// import './List.css'
// import Goback  from '../../components/GoBack/GoBack.js'
// 引入filter
import { filterPrice } from '../../../../filters/filters'

class List extends Component {

    componentDidMount() {
        const result = querystring.parse(this.props.location.search.slice(1));
        // 一进页面就发起请求   
        this.props.requestList(result.id);
    }
    detail(id){
        this.props.history.push('/detail?id='+id)
    }
    render() {
        const {indexgoods} = this.props;
        // 将数据对象转成对象
        function objOfValueToArr(object) {
            var arr = [];
            var i = 0;
            for (var item in object) {
                arr[i] = object[item];
                i++;
            }
            return arr;
        }
        let lists = indexgoods === undefined ? null : objOfValueToArr(indexgoods[0]);
        return (
            <div>
              
              <ul className='ulList'>
                {
                    lists[0] === undefined ? null : lists[0].map(item => {
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
        indexgoods: indexgoods(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: (id) => dispatch(requestIndexGoodsAction(id))
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(List)


