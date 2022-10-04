import React from "react";

// MUI Components
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

// MUI utils
import useMediaQuery from "@mui/material/useMediaQuery";

// Hooks
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

// Redux
import { IsSideBarOpen, setIsSidebarOpen } from "../../store/slices/uiSlice";
import Form from "../CharacterList/Form";

const SideBar: React.FC = () => {
  const isDesktopView = useMediaQuery("(min-width:768px)");
  const drawerWidth = 240;
  const dispatch = useAppDispatch();
  const isSideBarOpen = useAppSelector(IsSideBarOpen);
  const handleClick = () => {
    dispatch(setIsSidebarOpen(false));
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        position: "relative",
        zIndex: 1000,
      }}
      variant="persistent"
      anchor="left"
      open={isSideBarOpen}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "64px",
        }}
      >
        <IconButton onClick={handleClick}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Form />
    </Drawer>
  );
};
export default SideBar;
