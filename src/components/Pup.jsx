import React from 'react'
import BandPic from '../images/PupBandPic.jpg'
import AlbumArt from '../images/PupAlbumArt.jpeg'

const Pup = props => {
  console.log(props)
  return (
    <div>
      <section className="band-pic-container">
        <h1 className="band-name">Pup</h1>
        <img className="band-pic" src={BandPic} />
      </section>
      <h1 className="latest-album-header">Latest Album</h1>
      <section className="latest-album">
        <p className="album-info">
          Morbid Stuff is the third album by Canadian rock band PUP, released
          April 5, 2019 through Rise Records and Little Dipper, the band's
          personal label.
        </p>
        <img className="album-art" src={AlbumArt} />
      </section>
    </div>
  )
}

export default Pup
