import React from 'react'

const JoyceManor = props => {
  return (
    <div>
      <h1>Joyce Manor</h1>
      <img src={props.bandImage} />
      <section className="latest-album">
        <p className="album-info">Album info</p>
        <img src={props.albumImage} />
      </section>
    </div>
  )
}

export default JoyceManor
