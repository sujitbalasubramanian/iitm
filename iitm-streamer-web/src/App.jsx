import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDevices from "./Pages/ListDevices";
import SideBar from "./Components/SideBar";
import Devicedetails from "./Pages/Devicedetails";
import ListCases from "./Pages/ListCases";
import CaseDetails from "./Pages/CaseDetails";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
