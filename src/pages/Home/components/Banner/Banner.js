import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
import { banners, requestBannerAction } from '../../../../store/index'
import './Banner.css'

class Banner extends Component {
    componentDidMount() {
        // 一进页面就发起请求   
        this.props.requestBanner();
    }
    render() {
        const { banners } = this.props;
        return (
            <div className='banners'>
                <Carousel
               frameOverflow="visible"
               autoplay
               infinite
                >
                    {banners===undefined?null:banners.map(item => {
                        return <img src={this.$img+item.img} key={item.id} alt="" />
                    })}
                </Carousel>
            </div>
        )
    }
}
// 请求的数据
const mapStateToProps = (state) => {
    return {
        banners: banners(state)
    }
}
// 请求方法
const mapDispatchToProps = dispatch => {
    return {
        requestBanner: () => dispatch(requestBannerAction())
    }
}

//导出
export default connect(mapStateToProps, mapDispatchToProps)(Banner)

