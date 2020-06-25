import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Hamburger extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                    
                    <div className="hamburger" onClick={this.props.menumode}>
                        <img src="./images/hbIcon.png" alt="Nav Menu" />
                    </div>
                
            </>
        )
    }

}

export default Hamburger