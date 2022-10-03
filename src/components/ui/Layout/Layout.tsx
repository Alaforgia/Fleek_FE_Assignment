import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import NavBar from "../CharacterListPage/NavBar";
import Sidebar from "../CharacterListPage/Sidebar";

type Anchor = "left";

export default function Layout(props: any, anchor: Anchor) {
  const [isMenuOpen, setIsMenuOpen] = useState({ left: false });
  return(
    <>
    <NavBar>
      <Sidebar />
    </NavBar>
    </>
  )
}
