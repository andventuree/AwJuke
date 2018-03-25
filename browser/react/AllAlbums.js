import React, { Component } from 'react'

export default class AllAlbums extends Component{
  render(){
    return (
      <div>
        {this.props.fromStateAlbums.map(album =>{ //props came in from main.js <AllAlbums fromStateAlbums
          return (
            <div className="col-xs-4" key={album.id}>
              <a className="thumbnail" href="#" onClick={()=> this.props.handleClick(album)}>
                <img src={album.imageUrl}/>
                <div className="caption">
                  <h5>
                  <span>{album.name}</span>
                  </h5>
                  <small>{
                    album.songs.length > 1?
                    `${album.songs.length} songs`:
                    `${album.songs.length} song`
                  }</small>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}
