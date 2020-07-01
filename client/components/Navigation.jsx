import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Hamburger extends React.Component {
    state = {
        style: {

        }
    }
   
    closeanimation = () => {
       
        
        document.getElementById("bgeffectid").style.animation = "0.4s ease-out 0s 1 forwards bgclose"
        
            setTimeout(this.closenav , 400);
    }
    closenav = () => {
        
        this.props.menumode()
    }
    scrollto = () => {
            document.getElementById("pagecontent").scrollIntoView({ behavior: 'smooth'});
            this.closeanimation()
    }


    render() {
        return (
            <>

                <div className="navContent">
                    <div className="bgEffect" id="bgeffectid">
                        <div className="content">
                            <div className="closebutton" onClick={this.closeanimation}>
                            <img src="./images/icons/close.png" alt="Close" className="close" draggable="false"/>
                            </div>

                            <h2><b>Title</b></h2>
                            <hr></hr>
                            <div className="links">
                           <Router>
                            <div className="navlink"><Link to="projects" onClick={this.scrollto}>Projects</Link></div>
                            <div className="navlink"><Link to="about" onClick={this.scrollto}>About me</Link></div>
                            <div className="navlink"><Link to="apis" onClick={this.scrollto}>APIs</Link></div>
                            </Router>
                            </div>
                            

                            <div className="contact">
                            <h3><b>Contact</b></h3>
                            <hr></hr>
                            <p><b>email:</b> myemail@gmail.com</p>
                            <p><b>phone:</b> 123456789</p>
                            </div>

                            <div className="iconslot">
                            <a href="https://github.com/rubin-gower" target="_blank"><span className="externalLink"><img src="./images/icons/github.svg" alt="" className="linkimg"/></span></a>
                            <a href="https://github.com/rubin-gower" target="_blank"><span className="externalLink"><img src="./images/icons/slack.svg" alt="" className="linkimg"/></span></a>
                            <a href="https://www.linkedin.com/in/rubin-gower-84a5aa1b1/" target="_blank"><span className="externalLink"><img src="./images/icons/linkedin.png" alt="" className="linkimg"/></span></a>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }

}

export default Hamburger