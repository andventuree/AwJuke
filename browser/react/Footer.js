import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="pull-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward" />
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-play" />
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward" />
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" />
          </div>
        </div>
      </footer>
    )
  }
}
