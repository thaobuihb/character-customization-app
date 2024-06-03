import React from 'react'

const Part = ({path, index, zIndex}) => {
  return (
    <img  src={`character/${path}/${index + 1}.png`}  alt="" width={260} style={{ zIndex, position: 'absolute', left: 0, top: 0 }}></img>
  )
}

export default Part