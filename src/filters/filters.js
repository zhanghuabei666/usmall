// 过滤价格
export const filterPrice=(price)=>{
    return price.toFixed(2)
}

// 过滤时间
export const filterTime=(time)=>{
   let date=new Date(time)
   let year=date.getFullYear()
   let month=(date.getMonth()+1+"").padStart(2,'0')
   let day=(date.getDate()+"").padStart(2,"0")
   return `${year}-${month}-${day}`
}