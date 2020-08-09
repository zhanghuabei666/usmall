import React, { Component } from 'react'
import './Register.css'
import Goback  from '../../components/GoBack/GoBack.js'
import { Toast} from 'antd-mobile';
import { getRegister } from '../../util/request'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: "",
                password: "",
                nickname:""
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
    register() {
        getRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                Toast.info(res.data.msg, 1);
                this.props.history.push('/login')
            } else {
                Toast.info(res.data.msg, 1);
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className='register'>
                <div className="top">
                    <h3>注册</h3>
                    <div className="goback"><Goback></Goback></div>
                </div>
                <div className='main'>
                    <div>
                        手机号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} />
                    </div>
                    <div>
                        昵称：<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, 'nickname')} />
                    </div>
                    <div className='pass'>
                        密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')} />
                    </div>
                    <div className='btn' onClick={() => this.register()}>注册</div>
                    
                </div>
            </div>
        )
    }
}
