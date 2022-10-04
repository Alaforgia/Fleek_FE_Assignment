import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
