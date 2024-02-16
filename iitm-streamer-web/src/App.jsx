import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDevices from "./Pages/ListDevices";
import SideBar from "./Components/SideBar";
import Devicedetails from "./Pages/Devicedetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<ListDevices />} />
          <Route path="/device" element={<ListDevices />} />
          <Route path="/device/:device_name" element={<Devicedetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
