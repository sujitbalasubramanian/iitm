import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuLink } from "react-icons/lu";

function ListCases() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snaps, setSnaps] = useState([]);

  useEffect(() => {
    const getSnaps = async () => {
      setLoading(true);
      const res = await axios.get(process.env.API_IP + "/snap");
      if (res.data.status === 400) {
        setError(res.data.message);
      } else {
        setSnaps(res.data.data);
      }
      setLoading(false);
    };
    getSnaps();
  }, []);

  return loading ? (
    <h1 className="p-4 font-medium text-xl">Fetching Data ....</h1>
  ) : error !== "" ? (
    <h1 className="p-4 font-medium text-xl">{error}</h1>
  ) : (
    <div className="p-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Cases</h1>
      </div>
      <div className="flex items-center py-4 w-full">
        <div className="overflow-x-auto">
          <table className="table table-lg">
            <thead className="text-lg text-black">
              <tr>
                <th>Station Name</th>
                <th>Location</th>
                <th>Stream</th>
                <th>Register No.</th>
                <th>Violation</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-md">
              {snaps.length === 0 ? (
                <h1>No Cases Found</h1>
              ) : (
                snaps.map((snap, ind) => {
                  return (
                    <tr>
                      <td>{snap.device.device_name}</td>
                      <td>{snap.device.location}</td>
                      <td>{snap.stream}</td>
                      <td>{snap.rn_no}</td>
                      <td>{snap.violation}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-ghost"
                          onClick={(_) => {
                            navigate(`/case/${snap._id}`);
                          }}
                        >
                          <LuLink />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListCases;
