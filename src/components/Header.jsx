import { Box } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <Box
      className="user-combobox"
      component={"header"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "24px",
        py: "20px",
        borderBottom: "1px solid #E2E2EA",
      }}
    >
      <Logo />
      <NavLinks />
      <Avatar />
    </Box>
  );
};

export default Header;
