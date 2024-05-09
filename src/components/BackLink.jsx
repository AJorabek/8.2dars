import { Link, Typography } from "@mui/material";

const BackLink = () => {
  return (
    <Link
      href="#"
      underline="none"
      sx={{
        display: "flex",
      }}
    >
      <img src="/back-icon.svg" alt="back-icon" />
      <Typography
        component={"h2"}
        sx={{
          color: "#171725",
          fontWeight: "600",
          fontSize: "24px",
          ml: "24px",
        }}
      >
        Subloyiha ochish
      </Typography>
    </Link>
  );
};

export default BackLink;
