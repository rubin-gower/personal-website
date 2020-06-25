import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

import Showcase from "./Showcase"
class Projects extends React.Component {
    state = {

    }

    render() {
        return (
            <>

                 projects page
                 <Showcase type="left"/>
                 <Showcase type="right"/>
              
                
            </>
        )
    }

}

export default Projects