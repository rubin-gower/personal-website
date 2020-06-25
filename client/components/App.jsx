import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Paralax from "./Paralax"
import NavWrap from "./NavWrap"
import Projects from "./pages/Projects"
import About from "./pages/About"
import APIs from "./pages/APIs"

class App extends React.Component {
  state = {
    currentpage: "blank"
  }
  render() {
    return (
      <>
        <NavWrap />
        <Paralax />
    app
    <div id="pagecontent">test
        <Router>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/apis" component={APIs} />
          
          
         
        </Router>
        </div>
      </>
    )
  }
}


export default App
