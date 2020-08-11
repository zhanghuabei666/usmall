
// 搭建状态层
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 引入接口
import { getbanner, getindexgoods, getcatetree, getgoods, getgoodsinfo, getCartlist,getCartedit,getCartdelete } from '../util/request'

// 初始状态
const initState = {
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,//存登录信息
    banner: [],  //轮播图数据
    cate: [],   // 获取分类信息(首页)
    indexgoods: [],  // 获取商品信息(首页)
    goods: [],  // 获取分类商品
    goodsinfo: [],  // 获取一个商品信息
    cartlist: [],  // 购物车列表
    isEditor: false,//是否编辑
    isAll: false,//是否全选
}

//修改user的action 
export const changeUserAction = user => {
    return {
        type: "changeUser",
        user
    }
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
//改变商品信息详情
const changeGoodsinfoAction = obj => {
    return { type: 'changeGoodsinfo', list: obj }
}
// 一进页面发起商品信息请求
export const requestGoodsinfoAction = (id) => {
    return (dispatch, getState) => {
        // 缓存层 ，有数据就不二次请求
        // const {indexgoods}=getState()
        // if(indexgoods.length>0){
        //     return;
        // }
        // 发请求
        getgoodsinfo({ id: id }).then(res => {
            dispatch(changeGoodsinfoAction(res.data.list))
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

// 分类结束


// 购物车列表
const changeCartlistAction = list => {
    return { type: 'changeCartlist', list }
}
// 一进页面发起购物车列表请求
export const requestCartlistAction = (id) => {
    return (dispatch, getState) => {
        // 发请求
        getCartlist({ uid: id }).then(res => {
            const list = res.data.list ? res.data.list : [];
            list.forEach(item => {
                item.checked = false
            })
            dispatch(changeCartlistAction(list))
        })
    }
}

//修改isEdior 
export const changeIsEditorAction = () => ({
    type: "changeIsEditor"
})

//修改isAll
export const changeIsAllAction = () => ({
    type: "changeIsAll"
})

//修改某条数据的checked
export const changeOneAction = index => ({
    type: "changeOne",
    index
})

//用户在组件点了+ - 
export const requestEditAction=data=>{
    return (dispatch)=>{
        getCartedit(data).then(res=>{
        })
    }
}

//删除
export const requestDelAction=id=>{
    return (dispatch)=>{
        getCartdelete({id:id}).then(res=>{
            dispatch(requestCartlistAction())
        })
    }
}

// reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        // 修改用户
        case "changeUser":
            return {
                ...state,
                user: action.user
            }
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
        // 修改商品信息详情
        case "changeGoodsinfo":
            return {
                ...state,
                goodsinfo: action.list
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
        // 是否编辑
        case "changeIsEditor":
            return {
                ...state,
                isEditor: !state.isEditor
            }
        // 是否全选
        case "changeIsAll":
            return {
                ...state,
                isAll: !state.isAll,
                cartlist: state.cartlist.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }
        case "changeOne":
            const { cartlist } = state
            console.log(state);
            cartlist[action.index].checked = !cartlist[action.index].checked
            return {
                ...state,
                cartlist: [...cartlist],
                isAll: cartlist.every(item => item.checked)
            }
        // 修改购物车
        case "changeCartlist":
            return {
                ...state,
                cartlist: action.list
            }

        default:
            return state;
    }
}

// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

// 导出状态
export const getUser = (state) => state.user
export const banners = (state) => state.banners
export const indexgoods = (state) => state.indexgoods
export const cate = (state) => state.cate
export const goods = (state) => state.goods
export const goodsinfo = (state) => state.goodsinfo
export const cartlist = (state) => state.cartlist
export const isEditor = (state) => state.isEditor
export const isAll = (state) => state.isAll
export const getAllPrice = state => {
    /*
 var sum=0;
 const {list}=state.shop
 list.forEach(item=>{
 if(item.checked){
 sum+=item.price*item.num
 }
 })
 return sum*/
//  计算总价
const { cartlist } = state
return cartlist.reduce((val, item) => item.checked ? val + item.price * item.num : val, 0)
}

export default store




