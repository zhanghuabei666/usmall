import React from 'react'
import { Switch, Route ,Redirect} from 'react-router-dom'
import './App.css'
import MyRoute from './pages/MyRoute/MyRoute'

// 引入组件
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Index from './pages/Index/Index'
import Detail from './pages/Detail/Detail'
import FenInfo from './pages/FenInfo/FenInfo'
export default function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/reg' component={Register}></Route>
        <MyRoute path='/index' component={Index}></MyRoute>
        <MyRoute path='/detail' component={Detail}></MyRoute>
        <MyRoute path='/fenInfo' component={FenInfo}></MyRoute>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  );
}


