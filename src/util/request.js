import axios from 'axios'
import qs from 'qs'


// // 请求拦截
// axios.interceptors.requst.use(config=>{
//     return config
// })

// 响应拦截
axios.interceptors.response.use(res=>{
    console.log('请求数据=========');
    console.log(res);
    return res
})

// 会员注册
export const getRegister=(data)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}
// 会员登录
export const getLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}

// 获取分类信息(首页)
export const getcate=()=>{
    return axios({
        url:"/api/getcate",
        method:"get"
    })
}
// 获取轮播图信息(首页)
export const getbanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
// 获取限时秒杀信息(首页)
export const getseckill=()=>{
    return axios({
        url:"/api/getseckill",
        method:"get"
    })
}
// 获取商品信息(首页)
export const getindexgoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
// 获取分类树形结构
export const getcatetree=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}
// 获取分类商品
export const getgoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params
    })
}
// 获取一个商品信息
export const getgoodsinfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params

    })
}

// 购物车列表
export const getCartlist=(params)=>{
    return axios({
        url:"/api/cartlist",
        method:"get",
        params
    })
}
// 购物车添加
export const getCartadd=(data)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(data)
    })
}
// 购物车删除
export const getCartdelete=(data)=>{
    return axios({
        url:"/api/cartdelete",
        method:"post",
        data:qs.stringify(data)
    })
}
// 购物车修改
export const getCartedit=(data)=>{
    return axios({
        url:"/api/cartedit",
        method:"post",
        data:qs.stringify(data)
    })
}

