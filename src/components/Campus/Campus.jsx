import React from 'react'
import "./Campus.css"
import gallery_1 from "../../assets/IMG-20251006-WA0061.jpg"
import gallery_2 from "../../assets/IMG-20251006-WA0060.jpg"
import gallery_3 from "../../assets/IMG-20251006-WA0059.jpg"
import gallery_4 from "../../assets/IMG-20251006-WA0058.jpg"
import white_arrow from "../../assets/white-arrow.svg";


function Campus() {
  return (
    <div className='Campus' name={"Campus"}>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'><b>
        <a href="https://www.pexels.com/search/university/?utm_source=chatgpt.com">See more here <img src={white_arrow} alt="" /></a></b></button>
    </div>
  )
}

export default Campus
