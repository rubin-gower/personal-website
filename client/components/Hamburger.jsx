import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Hamburger extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <a href="">
                    <div className="hamburger">
                        <img src="./images/hbIcon.png" alt="hello" />
                    </div>
                </a>
            </>
        )
    }

}

export default Hamburger