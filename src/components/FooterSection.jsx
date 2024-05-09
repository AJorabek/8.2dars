import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Label from "./Label";
import { useEffect, useState } from "react";
import Input from "./Input";

const FooterSection = () => {
  const [age, setAge] = useState("");
  const [tab, setTab] = useState("uz");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      component={"footer"}
      sx={{
        border: "1px solid #E2E2EA",
        borderRadius: "16px",
        bgcolor: "#F8F8F8",
        p: "24px",
        height: "100%",
      }}
    >
      <Typography
        component={"h2"}
        sx={{
          color: "#171725",
          fontWeight: "600",
          fontSize: "24px",
          mb: "24px",
        }}
      >
        Habarning ko’rinishi
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <Box>
          <Box sx={{ mb: "16px", display: "grid", gap: "10px" }}>
            <Label children={"Shablon"} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Oddiy</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                name="selection"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: "16px", display: "grid", gap: "10px" }}>
            <Label children={"Link"} />
            <Input text={"Link"} variant={"url"} name={"link"} />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <Label children={"Xabar"} />
              <Typography
                sx={{
                  color: "#0062FF",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <img src="/plus-icon.svg" alt="plus-icon" />
                Shablon holatida saqlash
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <Box
                onClick={() => setTab("uz")}
                sx={{
                  py: "10px",
                  textAlign: "center",
                  bgcolor: tab === "uz" ? "white" : "transparent",
                  color: tab === "uz" ? "#0062FF" : "#92929D",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  cursor: "pointer",
                  border: tab === "uz" ? "1px solid #E2E2EA" : "",
                }}
              >
                Uzbekcha
              </Box>
              <Box
                onClick={() => setTab("ru")}
                sx={{
                  py: "10px",
                  textAlign: "center",
                  bgcolor: tab === "ru" ? "white" : "transparent",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  cursor: "pointer",
                  border: tab === "ru" ? "1px solid #E2E2EA" : "",
                  color: tab === "ru" ? "#0062FF" : "#92929D",
                }}
              >
                Russian
              </Box>
              <Box
                onClick={() => setTab("en")}
                sx={{
                  py: "10px",
                  textAlign: "center",
                  bgcolor: tab === "en" ? "white" : "transparent",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  cursor: "pointer",
                  border: tab === "en" ? "1px solid #E2E2EA" : "",
                  color: tab === "en" ? "#0062FF" : "#92929D",
                }}
              >
                English
              </Box>
            </Box>
            <Box>
              <textarea
                name="desc"
                className="textarea"
                placeholder={
                  tab === "uz"
                    ? "Matnni kiriting..."
                    : tab === "ru"
                    ? "введите текст"
                    : "Enter text..."
                }
              ></textarea>
            </Box>
            <Button
              type="submit"
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
                mt: "15px",
                ml: "auto",
              }}
            >
              Yuborish
            </Button>
          </Box>
        </Box>
        <Box>
          <img src="/image.png" alt="imae" />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
