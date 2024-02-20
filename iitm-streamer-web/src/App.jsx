import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDevices from "./Pages/ListDevices";
import SideBar from "./Components/SideBar";
import Devicedetails from "./Pages/Devicedetails";
import ListCases from "./Pages/ListCases";
import CaseDetails from "./Pages/CaseDetails";
import Logo from "./assets/Tamil_Nadu_Police_Logo.png";

// #03045e
// #0077b6
// #00b4d8

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div className="navbar bg-[#03045e]">
          <img className="h-[50px] w-[50px]" src={Logo} alt="" />
        </div>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<ListDevices />} />
            <Route path="/device" element={<ListDevices />} />
            <Route path="/device/:device_name" element={<Devicedetails />} />

            <Route path="/cases" element={<ListCases />} />
            <Route path="/case/:case_id" element={<CaseDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
