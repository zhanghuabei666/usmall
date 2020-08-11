import React from 'react'
import { Result, Icon, WhiteSpace } from 'antd-mobile';
export default function ResultsP() {
    return (
        <div>
            <Result
                img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                title="支付成功"
                message={<div>998.00元 <del>1098元</del></div>}
            />
        </div>
    )
}
