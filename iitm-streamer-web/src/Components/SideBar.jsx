import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Sidebar
      style={{
        background: "#0077b6",
        height: "100vh",
        ["&:hover"]: {
          background: "#0077b6",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            "&:hover": {
              backgroundColor: "#0077bc",
            },
          }),
        }}
      >
        <MenuItem component={<Link to={"/"} />}> Devices </MenuItem>
        <MenuItem component={<Link to={"/cases"} />}> Cases </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
