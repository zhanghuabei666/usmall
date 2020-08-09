// 搭建状态层
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 引入接口
import { getbanner, getindexgoods, getcatetree, getgoods } from '../util/request'

// 初始状态
const initState = {
    banner: [],  //轮播图数据
    cate: [],   // 获取分类信息(首页)
    // seckill: [],   // 获取限时秒杀信息(首页)
    indexgoods: [],  // 获取商品信息(首页)
    // catetree: [],  // 获取分类树形结构
    goods: [],  // 获取分类商品
    // goodsinfo: {},  // 获取一个商品信息
    // Cartlist: [],  // 购物车列表
    // Cartadd: {},  // 购物车添加
    // Cartdelete: {},  // 购物车删除
}

// Home页面开始
//改变轮播
const changeBannerAction = arr => {
    return { type: 'changeBanner', list: arr }
}
// 一进页面发起轮播图请求
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        // 缓存层 ，有数据就不二次请求
        // const {banners}=getState()
        // if(banners.length>0){
        //     return;
        // }
        // 发请求
        getbanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}

//改变商品信息
const changeIndexGoodsAction = arr => {
    return { type: 'changeIndexGoods', list: arr }
}
// 一进页面发起商品信息请求
export const requestIndexGoodsAction = () => {
    return (dispatch, getState) => {
        // 缓存层 ，有数据就不二次请求
        // const {indexgoods}=getState()
        // if(indexgoods.length>0){
        //     return;
        // }
        // 发请求
        getindexgoods().then(res => {
            dispatch(changeIndexGoodsAction(res.data.list))
        })
    }
}
// Home页面结束


//改变分类信息
const changeCateAction = arr => {
    return { type: 'changeCate', list: arr }
}
// 一进页面发起分类信息请求
export const requestCateAction = () => {
    return (dispatch, getState) => {
        // 缓存层 ，有数据就不二次请求
        // const {cates}=getState()
        // if(cates.length>0){
        //     return;
        // }
        // 发请求
        getcatetree().then(res => {
            dispatch(changeCateAction(res.data.list))
        })
    }
}
// 改变分类详情
const changeGoodsAction = arr => {
    return { type: 'changeGoods', list: arr }
}
// 一进页面发起分类信息请求
export const requestGoodsAction = (id) => {
    return (dispatch, getState) => {
        // 缓存层 ，有数据就不二次请求
        // const {cates}=getState()
        // if(cates.length>0){
        //     return;
        // }
        // 发请求
        getgoods({ fid: id }).then(res => {
            console.log(res);
            dispatch(changeGoodsAction(res.data.list))
        })
    }
}


// reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        // 修改轮播图
        case "changeBanner":
            return {
                ...state,
                banners: action.list
            }
        // 修改商品信息
        case "changeIndexGoods":
            return {
                ...state,
                indexgoods: action.list
            }
        // 修改分类信息
        case "changeCate":
            return {
                ...state,
                cate: action.list
            }
        // 修改分类详情信息
        case "changeGoods":
            return {
                ...state,
                goods: action.list
            }

        default:
            return state;
    }
}

// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

// 导出数据
export const banners = (state) => state.banners
export const indexgoods = (state) => state.indexgoods
export const cate = (state) => state.cate
export const goods = (state) => state.goods

export default store


