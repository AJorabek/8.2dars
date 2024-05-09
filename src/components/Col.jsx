import { Box } from "@mui/material";
import Label from "./Label";
import Input from "./Input";

const Col = ({ text, type, variant, name }) => {
  return (
    <Box
      component={"article"}
      sx={{
        display: "grid",
        gap: "4px",
      }}
    >
      <Label children={text} type={type} />
      <Input text={text} variant={variant} name={name} />
    </Box>
  );
};

export default Col;
