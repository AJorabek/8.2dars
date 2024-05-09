import { Box } from "@mui/material";
import BackLink from "./BackLink";
import ContinueBtn from "./ContinueBtn";

const CardHeader = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #E2E2EA",
        pb: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <BackLink />
      <ContinueBtn />
    </Box>
  );
};

export default CardHeader;
