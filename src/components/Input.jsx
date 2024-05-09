import { TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const Input = ({ text, variant, name }) => {
  if (variant === "time")
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker label="Basic time picker" className="date-input" />
        </DemoContainer>
      </LocalizationProvider>
    );

    return (
      <TextField
        name={name}
        type={variant}
        placeholder={text}
        sx={{
          borderRadius: "5px",
          bgcolor: "#FBFAFC",
        }}
      />
    );
};

export default Input;
