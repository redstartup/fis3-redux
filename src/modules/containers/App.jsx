import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import MainSection from '../components/MainSection/MainSection'
import NavBar from '../components/NavBar/NavBar'
import List from '../components/List/List'
import Card from '../components/Card/Card'

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page">
          <NavBar />
          <List>
            {
              [1,2,3,4]
              .map((x,i)=><Card key={i}/>)
            }
          </List>     
      </div>
    )
  }
}


export default connect()(App)
