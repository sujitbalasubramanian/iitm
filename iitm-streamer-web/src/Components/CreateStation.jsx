import { useState } from "react"
import { IoClose } from "react-icons/io5";

const CreateStation = ({ setRegister }) => {

  const [streamNumber, setStreamNumber] = useState(0)

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [streams, setStreams] = useState([])

  const register = async () => {
    console.log("hello world")
  }

  return (
    <div className="h-full w-full flex justify-center items-center p-3 backdrop-blur-md bg-gray-800 bg-opacity-80 fixed">
      
      <div className="p-3 bg-white rounded-md mr-[210px] flex flex-col gap-3 justify-center items-center">

        <div className="w-full justify-end items-end flex">
          <IoClose className="cursor-pointer" size={25} onClick={() => setRegister(false)} />
        </div>

        <label className="form-control w-[360px] max-w-xs">
          <div className="label">
            <span className="label-text">Device name:</span>
          </div>
          <input onChange={e => setName(e.target.value)} type="text" placeholder="Enter device name" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-[360px] max-w-xs">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input onChange={e => setLocation(e.target.value)} type="text" placeholder="Enter Location" className="input input-bordered w-full max-w-xs" />
        </label>


        <label className="form-control w-[360px] max-w-xs">
          <div className="label">
            <span className="label-text">Streams:</span>
          </div>
          <input onChange={e => setStreamNumber(e.target.value)} type="text" placeholder="Enter no. of streams" className="input input-bordered w-full max-w-xs" />
          
        {streamNumber > 0 && (
          <div className="mt-3 flex flex-col gap-y-3">
            {[...Array(parseInt(streamNumber))].map((_, index) => (
              <input
                key={index}
                onChange={(e) => setStreams[i](e.target.value)}
                type="text"
                placeholder={`Stream ${index + 1}: `}
                className="input input-bordered w-full max-w-xs"
              />
            ))}
          </div>
        )}

        </label>

        <button className="p-2 px-3 bg-black text-white rounded-md" onClick={register}>REGISTER</button>

      </div>

    </div>
  )
}

export default CreateStation
