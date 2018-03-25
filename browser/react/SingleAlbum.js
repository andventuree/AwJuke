import React, { Component } from 'react'

export default class SingleAlbum extends Component{
  render(){
    return (
      <div className="album col-xs-10">
        <div>
          <h3>{this.props.selectedAlbum.name}</h3>
          <img src={this.props.selectedAlbum.imageUrl ?
            this.props.selectedAlbum.imageUrl :
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300"
          } className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {console.log('is this songs array really an array???', this.props.selectedAlbum.songs)}
            {this.props.selectedAlbum.songs.map(song =>{
              return (
                <tr key={song.id}>
                  <td>
                    <button className="btn btn-default btn-xs">
                      <span className="glyphicon glyphicon-play"></span>
                    </button>
                  </td>
                  <td>{song.name}</td>
                  <td>{song.artists[0].name}</td>
                  <td>{song.genre}</td>
                </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    )
  }
}

