import React from 'react'
import { IoClose } from "react-icons/io5";

const PreviewImage = ({ url, setShowFullImage }) => {
  console.log(url)
  return (
    <div className="h-full w-[80%] flex flex-col justify-center items-center p-3 backdrop-blur-md bg-gray-800 bg-opacity-80 fixed">
      <div className="w-full p-2 flex justify-end cursor-pointer">
        <IoClose size={30} onClick={() => setShowFullImage(false)} />
      </div>
      <img
        className='w-full h-full border-2 border-white ob'
        src={url}
        alt="imageUrl"
      />
    </div>
  )
}

export default PreviewImage
