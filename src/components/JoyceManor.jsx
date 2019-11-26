import React from 'react'
import BandPic from '../images/JoyceManorBandPic.jpg'
import AlbumArt from '../images/JoyceManorAlbumArt.jpg'

const JoyceManor = () => {
  return (
    <div>
      <section className="band-pic-container">
        <h1 className="band-name">Joyce Manor</h1>
        <img className="band-pic" src={BandPic} />
      </section>
      <h1 className="latest-album-header">Latest Album</h1>
      <section className="latest-album">
        <p className="album-info">
          Million Dollars to Kill Me is the fifth studio album by American punk
          rock band Joyce Manor, released on September 21, 2018 through Epitaph
          Records.
        </p>
        <img className="album-art" src={AlbumArt} />
      </section>
    </div>
  )
}

export default JoyceManor
