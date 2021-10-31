import React, {useState, useEffect} from "react"
import add from "./../icons/add.svg"
import remove from "./../icons/remove.svg"
import heartThin from "./../icons/heart-thin.svg"
import heartFilled from "./../icons/heart-filled.svg"
import {Link} from "react-router-dom"



function MainContent(props){
  const [photosData, setPhotosData] = useState([])

  const handleClick=(id)=>{
    const editedData =  photosData.map(i=>{
      if(i.id===id){return {...i, isFavorited: !i.isFavorited}
      }return i})
    setPhotosData(editedData)
  }


  useEffect(()=>{
    fetch("https://picsum.photos/v2/list?page=3&limit=15")
      .then(response=>response.json())
      .then(data=>{
        // add a new variable isFavorited before setting state
        const favoriteVar = data.map(i=>({...i, isFavorited: false, price:50}))
        setPhotosData(favoriteVar)
      })
  }, [])


  const photos = photosData.map(i =>
      <div key={i.id} className="photo" style={{backgroundImage: `url(${i.download_url})`}}>
        <Link className="photo__link"to={`/details/${i.id}`}></Link>
        <div className="photo__actions">
          <img
          className={i.isFavorited ?"isLiked":"like"}
          src={i.isFavorited ? heartFilled:heartThin}
          alt=""
          onClick={()=>handleClick(i.id)}
          />
          <img
          className="update"
          src={props.shoppingCart.find(item=>item.id===i.id) !== undefined ?remove:add}
          alt=""
          onClick={()=>{props.editCart(i)}}
          />
        </div>
      </div>
  )


  return(
    <div className="photosCollage">
      {photos}
    </div>
  )
}


export default MainContent
