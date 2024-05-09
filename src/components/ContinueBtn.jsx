import { Button } from "@mui/material";

const ContinueBtn = () => {
  return (
    <Button
      className="next-btn"
      sx={{
        maxWidth: "152px",
        width: "100%",
        maxHeight: "48px",
        height: "100%",
        bgcolor: "#0062FF",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        textTransform: "capitalize",
        fontWeight: "600",
        color: "#ffff",
      }}
    >
      Davom etish
      <img src="/next-icon.svg" alt="next-icon" />
    </Button>
  );
};

export default ContinueBtn;
