import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <CssBaseline>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          height: "100%",
        }}
      >
        <Header />
        <Main />
      </Box>
    </CssBaseline>
  );
};

export default App;
