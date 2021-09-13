import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{

  //iterate each object in searchresults, save as track. track will contain 3 items (song, clbum, artist)
  render (){
    return (
      <div class="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}/>
          })
        }
      </div>
    )
  }
}

export default TrackList;
