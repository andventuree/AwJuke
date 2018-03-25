'use strict'

//modules
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

//components
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'
import Footer from './Footer'

// fetch('/api/albums')
//   .then(response => response.json())
//   .then(album => console.log(album))
//   .catch(console.error)

// for Axios - light ajax
const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);

export default class Main extends Component {
  constructor(props) {
    super(props), //`this` keyword not allowed to be used before `super`

    this.state = {
      albums: [],
      selectedAlbum: {default: true}
    }
    this.handleClick = this.handleClick.bind(this); //Bind the method in our constructor (we're going to eventually pass it as a callback to our click listener, so we need to preserve the this context).
    this.reset = this.reset.bind(this);
  }

  componentDidMount(){
    axios.get('/api/albums') //will return promise of HTTP response
    .then(toJson) //received data, need to parse
    .then(data => {
      this.setState({albums : data})
    }) //using set method, not manual
    .catch(logError);
  }

  handleClick(clickedOnAlbum){
    // console.log('click is working');
    console.log('clickedOnAlbum: ', clickedOnAlbum);
    axios.get(`/api/albums/${clickedOnAlbum.id}`)
    .then(res => res.data) //need to use res.data not res.json, otherwise this.props.selectedAlbum.songs will not be an array
    .then(retreivedAlbum => { //Using arrow functions is important here! Otherwise, our this context would be undefined!
      console.log('retreivedAlbum: ', retreivedAlbum);
      this.setState({ selectedAlbum: retreivedAlbum })
    })
    .catch(logError);
  }

  reset(){
    console.log('at least inside reset fn');
    this.setState({selectedAlbum: {default: true} })
  }

  render() {
    return (
      <div>
        <Sidebar resetBtn={this.reset}/>
        <div className="col-xs-10">

        {this.state.selectedAlbum.default?
          <div>
          <h3>Albums</h3>
            <div className="row">
              <AllAlbums
              fromStateAlbums={this.state.albums}
              handleClick={this.handleClick} />
            </div>
          </div> :
          <SingleAlbum selectedAlbum={this.state.selectedAlbum}/>
        }
            </div>
        <Footer />
      </div>
    )
  }
}


