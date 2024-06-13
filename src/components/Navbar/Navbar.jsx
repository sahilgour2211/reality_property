import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CallIcon from "@mui/icons-material/Call";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  {
    id: "1",
    name: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    id: "2",
    name: "Services",
    icon: <BusinessCenterIcon />,
    path: "/services",
  },
  {
    id: "3",
    name: "Contact us",
    icon: <CallIcon />,
    path: "/contact-us",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChange = (path) => {
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Reality Unit
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#28282B" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="/images/mainLogo.png"
              alt=""
              width={"250px"}
              height={"100px"}
              style={{ objectFit: "cover" }}
            />
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "16px" }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{
                    color: currentPath === item.path ? "#FFEA00" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onClick={() => handleChange(item.path)}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Box
                sx={{ color: "#FFEA00", display: "flex", alignItems: "center" }}
              >
                <CallIcon color="#FFEA00" />
              </Box>
              +91 75 3506 5051
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
