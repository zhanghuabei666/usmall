import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
class GoBack extends Component {
    GoBack() {
        this.props.history.goBack()
    }
    render() {
        return (
            <p onClick={this.GoBack.bind(this)}>返 回</p>
        )
    }
}
export default withRouter(GoBack)
