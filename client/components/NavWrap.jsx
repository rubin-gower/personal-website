import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

import Hamburger from "./Hamburger"
import Navigation from "./Navigation"

class NavWrap extends React.Component {
    state = {
        mode: true
    }
    changemode = () => {
       
        this.setState ({
            mode: !this.state.mode
        })
    }
    render() {
        return (
            <>
            <div className="wrapper" >
                {
                    this.state.mode ? <Hamburger menumode={this.changemode}/> : <Navigation menumode={this.changemode}/>
                }
             
             
             </div>
            </>
        )
    }

}

export default NavWrap