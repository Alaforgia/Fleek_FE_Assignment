import * as React from "react";
import { useRouter } from "next/router";

// MUI Components
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// MUI Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

// Redux Hooks
import { useAppDispatch } from "../../../hooks/hooks";

// Redux Actions
import { setIsSidebarOpen } from "../../../store/slices/uiSlice";

const Navbar: React.FC<{ isDetailPage: boolean }> = ({ isDetailPage }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleMenuClick = () => {
    dispatch(setIsSidebarOpen(true));
  };
  
  return (
    <AppBar component="nav" position="fixed">
      <Toolbar>
        {!isDetailPage ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleBackButtonClick}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Rick & Morty Wiki
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
