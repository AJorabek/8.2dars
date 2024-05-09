import { Box } from "@mui/material";
import Col from "./Col";

const Row = ({ text, text1, type, type1, variant, variant1, name, name1 }) => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
      }}
    >
      <Col text={text} type={type} variant={variant} name={name} />
      <Col text={text1} type={type1} variant={variant1} name={name1} />
    </Box>
  );
};

export default Row;
