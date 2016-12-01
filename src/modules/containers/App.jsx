import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MainSection from '../components/MainSection/MainSection'

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page">
          <Header/>
          <MainSection/>
          <Footer/>
      </div>
    )
  }
}


export default connect()(App)
