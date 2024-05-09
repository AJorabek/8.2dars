import { Box } from "@mui/material";
import MainCard from "./MainCard";

const Main = () => {
  return (
    <Box
      component={"main"}
      sx={{
        pt: "30px",
        px: "24px",
      }}
    >
      <MainCard />
    </Box>
  );
};

export default Main;
