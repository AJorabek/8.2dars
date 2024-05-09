import { Link } from "@mui/material";

const NavItem = ({ url, text, index }) => {
  return (
    <Link
      className="hover-link"
      underline="none"
      sx={{
        color: index + 1 === 3 ? "#0062FF" : "#92929D",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        fontWeight: "600",
        textTransform: "capitalize",
        fontSize: "14px",
      }}
    >
      <img src={url} alt="icon" />
      {text}
    </Link>
  );
};

export default NavItem;
