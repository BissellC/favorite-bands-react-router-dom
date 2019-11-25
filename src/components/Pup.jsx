import React from 'react'

const Pup = props => {
  return (
    <div>
      <h1>Pup</h1>
      <img src={props.bandImage} />
      <section className="latest-album">
        <p className="album-info">Album info</p>
        <img src={props.albumImage} />
      </section>
    </div>
  )
}

export default Pup
