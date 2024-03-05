import React from 'react'
import "./ImageSection.css"
const ImageSection = () => {
  return (
    <div className='mt-[30vh] relative'>
    <img src="https://worldref.co/wp-content/uploads/2023/12/Hero-Section_About-Us.webp" alt="" class="d-md-block d-none m-auto"></img>
    <button className='bg-white w-[200px] h-[50px] text-black capitalize absolute bottom-2 right-[10%] rounded-md btn-img'>Meet WorldRef Team</button>
    </div>
  )
}

export default ImageSection