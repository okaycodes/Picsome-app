import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"


function Details(){
  const{productId} = useParams()
  const [photoDetails, setPhotosDetails] = useState({})

  useEffect(()=>{
    fetch(`https://picsum.photos/id/${productId}/info`)
      .then(res=>res.json())
      .then(data=>{
        setPhotosDetails(
          {
            ...data,
            price:50,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. `
          }
          )
      })
  })

  return(
    <div className="photo-details">
      <div className="photo-details__details">
        <h1>The {photoDetails.author}</h1>
        <p>Description: {photoDetails.description}</p>
        <p>Price:  ${photoDetails.price}</p>
        <p>Author: {photoDetails.author}</p>
      </div>
      <img
        className="photo-details__img"
        src={photoDetails.download_url}
        alt=""
      />
    </div>
  )
}

export default Details
