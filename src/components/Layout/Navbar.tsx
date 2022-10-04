import React from "react";
import { useRouter } from "next/router";

// MUI Components
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// MUI Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

// Libs
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

// Redux Hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// Redux Actions
import { setIsSidebarOpen, IsSideBarOpen } from "../../store/slices/uiSlice";

const Navbar: React.FC<{ isDetailPage: boolean }> = ({ isDetailPage }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width:768px)");
  const handleBackButtonClick = () => {
    router.back();
  };
  const isSideBarOpen = useAppSelector(IsSideBarOpen);
  const handleMenuClick = () => {
    dispatch(setIsSidebarOpen(!isSideBarOpen));
  };
  return (
    <AppBar component="nav" position="fixed" color="primary">
      <Toolbar sx={{ position: "relative", width: "100%" }}>
        {!isDetailPage ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
            sx={{ mr: 4, ml: 15 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleBackButtonClick}
            sx={{ mr: 4, ml: 15 }}
          >
            <ArrowBackIcon color="inherit" />
          </IconButton>
        )}
        <span className="logoImage">
          {isDesktop ? (
            <Image
              src="/Rick_and_Morty.svg"
              alt="Rick and Morty"
              height="60px"
              width="1000px"
            />
          ) : (
            <Image
              src="/Rick_and_Morty.svg"
              alt="Rick and Morty"
              height="40px"
              width="200px"
            />
          )}
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
