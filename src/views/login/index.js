import React, {Component} from 'react'
import { Button } from 'antd'

export default class extends Component {
  onLogin = () => {
    console.log('login', this)
  }
  onLogout = () => {
    console.log('logout', this)
  }
  render() {
    return <div>
      <Button onClick={this.onLogin}>登录</Button>
      <Button onClick={this.onLogout}>注销</Button>
    </div>
  }
}