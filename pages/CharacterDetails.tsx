import * as React from "react";
import NavBar from "../src/components/ui/CharacterListPage/NavBar";
import CharacterDetailLogo from "../src/components/ui/CharacterDetailsPage/CharacterLogo";
import CharacterInfo from "../src/components/ui/CharacterDetailsPage/CharacterInfo";
import EpisodeList from "../src/components/ui/CharacterDetailsPage/EpisodeList";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function CharacterDetails() {
  return (
    <>
      <NavBar>
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 7, mt: 6 }}>
          <CharacterDetailLogo />
          <CharacterInfo />
        </Container>
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "25vh"}}>
          <EpisodeList />
        </Container>
      </NavBar>
    </>
  );
}
