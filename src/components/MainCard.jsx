import { Box } from "@mui/material";
import CardHeader from "./CardHeader";
import FormSection from "./FormSection";

const MainCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        pt: "24px",
        px: "16px",
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
        border: "1px solid#E2E2EA",
      }}
    >
      <CardHeader />
      <FormSection />
    </Box>
  );
};

export default MainCard;
