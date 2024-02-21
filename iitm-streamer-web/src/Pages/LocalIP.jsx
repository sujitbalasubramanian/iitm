import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function LocalIP() {
  const [devices, setDevices] = useState([]);
  const inputRef = useRef(null);

  const addDevice = (e) => {
    e.preventDefault();
    setDevices((cr) => [...cr, e.target.value]);
    inputRef.current.value = "";
  };
  const removeDevice = (index) => {
    const newdevice = devices.filter((d, i) => i != index);
    setDevices(newdevice);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl my-2">Local Cam View</h1>
      <form className="flex item-center gap-4" onSubmit={addDevice}>
        <input type="text" className="input input-bordered" ref={inputRef} />
        <button type="submit" value="Add Device" className="btn btn-active">
          Add Device
        </button>
      </form>

      <div className="my-4 flex flex-wrap gap-4">
        {devices.map((device, ind) => {
          return (
            <div
              className="h-[300px] w-[450px] bg-gray-300 rounded-md p-2 relative"
              key={ind}
            >
              <div
                className="rounded-full bg-black w-4 absolute top-2 right-2"
                onClick={(_) => removeDevice(ind)}
              >
                <AiOutlineClose color="white" />
              </div>
              <img src={device} alt={device} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocalIP;
