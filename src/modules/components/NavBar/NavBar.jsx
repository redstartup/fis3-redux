import React ,{ Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
      	<div className="NavBar__left">
      		<icon className="NavBar__left__icon-return"></icon>
      		<span className="NavBar__left__btn-name">返回</span>
      	</div>
      	<span className="NavBar__title">选择模板</span>
      </nav>
    )
  }
}

export default NavBar
