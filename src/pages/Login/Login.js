import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Login.css'

import { Toast} from 'antd-mobile';
import { getLogin } from '../../util/request'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login() {
        getLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.props.history.push('/index');
                Toast.info(res.data.msg, 1);
            } else {
                Toast.info(res.data.msg, 1);
            }

        })
    }
    render() {
        const { user } = this.state
        return (
            <div className='login'>
                <div className="top">
                    <h3>登录</h3>
                    <NavLink to='/reg'>注 册</NavLink>
                </div>
                <div className='main'>
                    <div>
                        账号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} />
                    </div>
                    <div className='pass'>
                        密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')} />
                    </div>
                    <p>忘记密码</p>
                    <div className='btn' onClick={() => this.login()}>登录</div>
                </div>
            </div>
        )
    }
}
