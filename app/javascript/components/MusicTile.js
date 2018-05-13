import React from 'react'

const MusicTile = props => {

  return (
<div className="music">
  <h1>Music</h1>
  <div>
    <iframe src="https://open.spotify.com/embed?uri=spotify:track:5m71MPL6r8C76XzzsdQOoK" width="300" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
  </div>

  <div>
    <img src="https://i.imgur.com/AAfPxqh.jpg" title="source: imgur.com" />
  </div>

  <div>
  <img src="https://i.imgur.com/ZWrAS6y.jpg" title="Demo Cover" />
  </div>
</div>
  )
}

export default MusicTile;
