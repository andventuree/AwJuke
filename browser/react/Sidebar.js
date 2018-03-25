import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-xs-2">
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#" onClick={() => this.props.resetBtn()}>ALBUMS</a>
            </h4>
          </section>
        </sidebar>
      </div>
    )
  }
}
