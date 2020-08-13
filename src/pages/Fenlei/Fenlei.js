import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cate, requestCateAction } from '../../store/index'
import './Fenlei.css'
class Fenlei extends Component {
    componentDidMount() {
        // 一进页面就发起请求   
        this.props.requestList();
    }
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    FenInfo(id,name){
        this.props.history.push('/fenInfo?id='+id+'&name='+name)
    }
    render() {
        const { cate } = this.props;
        const { n } = this.state;
        return (
            <div className='fenlei'>
                <h3>分类</h3>
                <div className="main1">
                    <div className="navL">
                        {
                            cate === undefined ? null : cate.map((item, index) => {
                                return <span onClick={() => this.changeN(index)} className={n === index ? 'select' : ''} key={item.id}>{item.catename}</span>
                            })
                        }
                    </div>
                    <ul className="lists">
                        {
                            cate.length > 0 ? cate[n].children.map(item => {
                                return <li key={item.id} className='img' onClick={()=>this.FenInfo(item.id,item.catename)}>
                                    <img src={item.img} alt="" />
                                    <p className='name'>{item.catename}</p>
                                </li>
                            }) : null
                        }
                    </ul>
                </div>

            </div>
        )
    }
}


// 请求的数据
const mapStateToProps = (state) => {
    return {
        cate: cate(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestList: () => dispatch(requestCateAction())
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(Fenlei)

