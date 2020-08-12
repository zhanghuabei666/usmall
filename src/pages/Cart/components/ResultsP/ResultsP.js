import React from 'react'
import { Result} from 'antd-mobile';
import './ResultsP.css'
import shopping from '../../../../assets/img/tab_shopping_nor.png'
export default function ResultsP() {
    const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
    return (
        
        <div>
            <Result
                img={myImg(shopping)}
                title="购物车还是空的"
                message={<div>快去看看吧~</div>}
            />
        </div>
    )
}
