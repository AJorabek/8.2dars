import { Box, Typography } from "@mui/material";

const Avatar = () => {
  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img src="/avatar.svg" alt="user-avatar" />
      <Typography
        component={"h2"}
        sx={{
          color: "#171725",
          fontWeight: "600",
          fontSize: "14px",
          fontFamily: "inherit",
          ml: "10px",
          mr: "18px",
          "::selection": "none",
        }}
      >
        Austin Robertson
      </Typography>
      <img src="/select-icon.svg" alt="select-icon" />
    </Box>
  );
};

export default Avatar;
