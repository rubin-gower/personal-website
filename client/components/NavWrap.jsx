import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

import Hamburger from "./Hamburger"
import Navigation from "./Navigation"

class NavWrap extends React.Component {
    state = {
        mode: true
    }
    changemode = () => {
        console.log("changing mode")
        this.setState ({
            mode: !this.state.mode
        })
    }
    render() {
        return (
            <>
            <div className="wrapper" onClick={this.changemode}>
                {
                    this.state.mode ? <Hamburger/> : <Navigation/>
                }
             
             
             </div>
            </>
        )
    }

}

export default NavWrap