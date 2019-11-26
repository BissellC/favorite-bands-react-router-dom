import React from 'react'
import BandPic from '../images/TheFrightsBandPic.png'
import AlbumArt from '../images/TheFrightsAlbumArt.jpg'

const TheFrights = () => {
  return (
    <div>
      <section className="band-pic-container">
        <h1 className="band-name">The Frights</h1>
        <img className="band-pic" src={BandPic} />{' '}
      </section>
      <h1 className="latest-album-header">Latest Album</h1>
      <section className="latest-album">
        <p className="album-info">
          Hypochondriac is the third studio album by American surf-punk band The
          Frights, released August 24, 2018 on Epitaph Records.
        </p>
        <img className="album-art" src={AlbumArt} />
      </section>
    </div>
  )
}

export default TheFrights
