import axios from "axios";
import { useEffect, useState } from "react";
import { LuCamera } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ListDevices() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [devices, setDevice] = useState([]);

  useEffect(() => {
    const getDevices = async () => {
      setLoading(true);
      const res = await axios.get(process.env.API_IP + "/devices");
      if (res.data.status === 400) {
        setError(res.data.message);
      } else {
        setDevice(res.data.data);
      }
      setLoading(false);
    };
    getDevices();
  }, []);

  return loading ? (
    <h1 className="p-4 font-medium text-xl">Fetching Data ....</h1>
  ) : error !== "" ? (
    <h1 className="p-4 font-medium text-xl">{error}</h1>
  ) : (
    <div className="p-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Registered Stations</h1>
      </div>
      <div className="flex items-center py-4 w-full">
        {devices.length === 0 ? (
          <h1>No Stations Found</h1>
        ) : (
          devices.map((device, ind) => {
            return (
              <div
                key={ind}
                className="bg-gray-200 flex justify-center items-center gap-4 p-2 rounded-md"
                onClick={() => {
                  navigate(`/device/${device.device_name}`);
                }}
              >
                <LuCamera size={80} />
                <div className="flex flex-col text-xl">
                  <h1>Station Name: {device.device_name}</h1>
                  <h1>Location: {device.location}</h1>
                  <h1>Number of cams: {device.streams.length} cams</h1>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ListDevices;