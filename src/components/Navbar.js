import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              margin: "auto",
              fontSize: "3rem",
              fontFamily: "Abril Fatface cursive",
            }}
          >
            <MenuBookIcon sx={{ fontSize: "40px" }} /> Dictionary App{" "}
            <MenuBookIcon sx={{ fontSize: "40px" }} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
