import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Showcase extends React.Component {
    state = {
        style: {
            float: this.props.type,
            textalign:  this.props.type
        }
    }

    render() {
        return (
            <>
                showcase
                <div className="showcase" style={this.state.style}>
                    <div className="display" style={this.state.style}>imgs</div>
                    <div className="title" style={this.state.style}>title</div>
                    <div className="text" style={this.state.style}>about</div>

                </div>
            </>
        )
    }

}

export default Showcase