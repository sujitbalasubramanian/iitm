import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Devicedetails() {
  const { case_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [caseData, setCaseData] = useState({
    device: {
      device_name: "",
      location: "",
    },
    stream: "",
    violation: "",
    rn_no: "",
  });

  useEffect(() => {
    const getCase = async () => {
      setLoading(true);
      const res = await axios.get(process.env.API_IP + `/snap/${case_id}`);
      if (res.data.status === 400) {
        setError(res.data.message);
      } else {
        setCaseData(res.data.data);
      }
      setLoading(false);
    };
    getCase();
  }, []);

  return loading ? (
    <h1 className="p-4 text-xl">Getting Data Please wait...</h1>
  ) : error !== "" ? (
    <h1 className="p-4 text-xl">{error}</h1>
  ) : (
    <div className="p-4 w-full text-xl">
      <h1>Case Id: {caseData._id}</h1>
      <h1>Station Name: {caseData.device.device_name}</h1>
      <h1>Location: {caseData.device.location}</h1>
      <h1>
        Stream: Device-
        {caseData.device?.streams?.indexOf(`${caseData.stream}`) + 1}
      </h1>
      <img
        src={process.env.AWS_IP + ":4000/" + caseData.snap_path}
        alt="snapshot of case"
      />
    </div>
  );
}

export default Devicedetails;
