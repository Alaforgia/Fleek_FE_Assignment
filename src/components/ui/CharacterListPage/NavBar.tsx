import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Anchor = "left";

export default function NavBar(props: any, anchor: Anchor) {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  const [isMenuOpen, setIsMenuOpen] = useState({ left: false });

  const menuButtonHandler = (anchor: Anchor, open: boolean) => (event: React.MouseEvent) => {
    setIsMenuOpen({ ...isMenuOpen, [anchor]: open });
    console.log("Is menu button working?");
  };

  const buttonContainer = () => {};

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
          {false ? (
            <IconButton
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, color: "black" }}
              onClick={backButtonHandler}
            >
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <IconButton onClick={menuButtonHandler(anchor, true)}>
              <MenuRoundedIcon />
            </IconButton>
          )}
          <Typography sx={{ textAlign: "center" }}>Rick and Morty Logo</Typography>
        </Box>
        {props.children}
      </Container>
    </>
  );
}
