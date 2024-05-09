import { Box } from "@mui/material";
import NavItem from "./NavItem";

let data = [
  "asosiy",
  "Mijozlar bazasi",
  "Tracking loyihalari",
  "Sharh olish jarayonlari",
  "Redirect loyihalari",
];

const NavLinks = () => {
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "36px",
      }}
    >
      {data.map((e, i) => (
        <NavItem
          key={i}
          {...{
            text: e,
            url: "/icon" + (i + 1) + ".svg",
            index: i,
          }}
        />
      ))}
    </Box>
  );
};

export default NavLinks;
