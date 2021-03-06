import React from 'react'

const GifList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.gifs.map(gif=>{
        return <li key={gif.id}><img src={gif.images.original.url} alt=''/></li>
      })}
    </ul>
  )
}

export default GifList
