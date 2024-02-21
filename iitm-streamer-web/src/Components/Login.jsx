import { useState } from "react"
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Login = ({ setLogin }) => {

  const [streamNumber, setStreamNumber] = useState(0)

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  const register = async () => {
    if(name === "" || pass === "") {
      console.log("invalid details")
      return
    }

    localStorage.setItem("name", name);
    localStorage.setItem("pass", pass);
    setLogin(false)
  }

  return (
    <div className="h-full w-full flex justify-center items-center p-3 backdrop-blur-md bg-gray-800 bg-opacity-80 fixed">

      <div className="p-3 bg-white rounded-md mr-[210px] flex flex-col gap-3 justify-center items-center">

        <div className="w-full justify-end items-end flex">
          <IoClose className="cursor-pointer" size={25} onClick={() => setLogin(false)} />
        </div>

        <label className="form-control w-[360px] max-w-xs">
          <div className="label">
            <span className="label-text">User name:</span>
          </div>
          <input onChange={e => setName(e.target.value)} type="text" placeholder="Enter user name" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-[360px] max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input onChange={e => setPass(e.target.value)} type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
        </label>

        <button className="p-2 px-3 bg-black text-white rounded-md" onClick={register}>Login</button>

      </div>

    </div>
  )
}

export default Login
