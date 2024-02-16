import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to={"/"} />}> Devices </MenuItem>
        <MenuItem> Cases </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;