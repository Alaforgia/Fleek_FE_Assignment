import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function NavBar(props: any) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true} sx={{ height: "100vh", m: 0, p: 0 }}>
        <Box
          sx={{
            bgcolor: "#32e75f",
            height: "7vh",
            maxWidth: "100%",
            width: "100%",
            m: 0,
            p: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // flexDirection: "column",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Rick and Morty Logo</Typography>
        </Box>
        {props.children}
      </Container>
    </>
  );
}
