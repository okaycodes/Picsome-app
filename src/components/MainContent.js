import React, {useState, useEffect} from "react"
import add from "./../icons/add.svg"
import heartThin from "./../icons/heart-thin.svg"
import heartFilled from "./../icons/heart-filled.svg"



function MainContent(){
  const [photosData, setPhotosData] = useState([])

  useEffect(()=>{
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then(response=>response.json())
      .then(data=>setPhotosData(data))
  }, [])
  const photos = photosData.map(i=>
    <div key={i.id} className="photo" style={{backgroundImage: `url(${i.download_url})`}}>
      <div className="photo__actions">
        <img className="favorite" src={heartThin} alt=""/>
        <img className="add" src={add} alt=""/>
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
