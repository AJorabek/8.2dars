import { Box, Checkbox, Typography } from "@mui/material";

const Label = ({ children, type }) => {
  return (
    <Box>
      {type && <Checkbox />}

      <Typography
        component={"label"}
        sx={{
          color: "#504F54",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Label;
