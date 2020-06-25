import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Hamburger extends React.Component {
    state = {

    }

    render() {
        return (
            <>

                <div className="navContent">
                    <div className="bgEffect">
                        <img src="./images/close.png" alt="Close" />
                        <ul>
                            <li>Contact</li>
                            <li>Prodjects</li>
                            <li>APIs</li>

                        </ul>
                    </div>
                </div>

            </>
        )
    }

}

export default Hamburger