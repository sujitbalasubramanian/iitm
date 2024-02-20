import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewImage from "../Components/PreviewImage";

function Devicedetails() {
  const { device_name } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [deviceData, setDeviceData] = useState({
    device_name: "",
    location: "",
    streams: [],
  });

  const [showFullImage, setShowFullImage] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const getDevice = async () => {
      setLoading(true);
      const res = await axios.get(
        process.env.API_IP + `/devices/${device_name}`
      );
      if (res.data.status === 400) {
        setError(res.data.message);
      } else {
        setDeviceData(res.data.data);
      }
      setLoading(false);
    };
    getDevice();
  }, []);

  const getLink = (port) => {
    const AWS_IP = process.env.AWS_IP;
    return `${AWS_IP}:${port}/video_feed`;
  };

  return loading ? (
    <h1 className="p-4 text-xl">Getting Data Please wait...</h1>
  ) : error !== "" ? (
    <h1 className="p-4 text-xl">{error}</h1>
  ) : (

    <>
      {showFullImage &&
        <div className="h-full w-[80%]">
          <PreviewImage url={imageUrl} setShowFullImage={setShowFullImage} />
        </div>
      }

      <div className="p-4 w-full text-xl">
        <h1>Station Name: {deviceData.device_name}</h1>
        <h1>Location: {deviceData.location}</h1>
        <h1>No of Cams: {deviceData.streams.length}</h1>
        <div className="flex items-center gap-4 py-4">
          {deviceData.streams.map((stream, ind) => (
            <div
              className="h-[300px] w-[450px] bg-gray-300 rounded-md p-2"
              key={ind}
            >
              <img
                src={getLink(stream)}
                alt={getLink(stream)}
                onClick={() => {
                  setImageUrl(getLink(stream))
                  setShowFullImage(true)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Devicedetails;
