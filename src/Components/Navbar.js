/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
// import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);


  // const menuOptions = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "About",
  //     icon: <InfoIcon />,
  //   },
  //   {
  //     text: "Testimonials",
  //     icon: <CommentRoundedIcon />,
  //   },
  //   {
  //     text: "Contact",
  //     icon: <PhoneRoundedIcon />,
  //   },
  //   {
  //     text: "Cart",
  //     icon: <ShoppingCartRoundedIcon />,
  //   },
  // ];
 
 
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#joinus">Join Us</a>
        <a href="#contactus">Contact Us</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {/* <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}

          <div className="menuicons" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
            <a href="#about" onClick={() => setOpenMenu(false)}>About Us</a>
            <a href="#process" onClick={() => setOpenMenu(false)}>Process</a>
            <a href="#joinus" onClick={() => setOpenMenu(false)}>Join Us</a>
            <a href="#contactus" onClick={() => setOpenMenu(false)}>Contact Us</a>
            
          </div>
          
          
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
