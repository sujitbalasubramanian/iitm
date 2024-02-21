import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDevices from "./Pages/ListDevices";
import SideBar from "./Components/SideBar";
import Devicedetails from "./Pages/Devicedetails";
import ListCases from "./Pages/ListCases";
import CaseDetails from "./Pages/CaseDetails";
import Logo from "./assets/Tamil_Nadu_Police_Logo.png";
import LocalIP from "./Pages/LocalIP";

// #03045e
// #0077b6
// #00b4d8

function App() {

  const [login, setLogin] = useState(false)

  return (

    <BrowserRouter>

      <div className="flex flex-col">

        <div className="navbar bg-[#03045e] flex justify-between">
          <img className="h-[50px] w-[50px]" src={Logo} alt="" />
          <div className="flex gap-3">
            { localStorage.getItem("name") !== null && <h2 className="text-white">Welcome {localStorage.getItem("name")}</h2> }
            <button
              className="p-2 px-3 bg-black text-white"
              onClick={() => {
                localStorage.getItem("name") === null ? setLogin(true) : (localStorage.clear(), window.location.reload())
              }}
            >
              { localStorage.getItem("name") === null ? "Login" : "Sign out" }
            </button>
          </div>
        </div>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<ListDevices login={login} setLogin={setLogin} />} />
            <Route path="/device" element={<ListDevices />} />
            <Route path="/device/:device_name" element={<Devicedetails />} />

            <Route path="/cases" element={<ListCases />} />
            <Route path="/case/:case_id" element={<CaseDetails />} />

            <Route path="/local" element={<LocalIP />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
