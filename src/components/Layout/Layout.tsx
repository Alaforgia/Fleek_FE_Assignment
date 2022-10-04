import { useEffect, useState } from "react";
import React from "react";

import ScrollToTopButton from "./ScrollToTopButton";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type LayoutProps = {
  children: React.ReactNode;
  isDetailPage: boolean;
};

const Layout = ({ children, isDetailPage = false }: LayoutProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar isDetailPage={isDetailPage} />
        <SideBar />
        <Box
          component="main"
          sx={{ marginTop: "5rem", minHeight: "calc(100vh - 100px)" }}
        >
          {children}
        </Box>
        <Footer />
      </Container>
      <ScrollToTopButton>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopButton>
    </>
  );
};

export default Layout;
