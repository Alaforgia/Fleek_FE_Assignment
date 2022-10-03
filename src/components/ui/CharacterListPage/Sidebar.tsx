import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

type Anchor = "top" | "left" | "bottom" | "right";

const status = [
  {
    value: "Alive",
    label: "Alive",
  },
  {
    value: "Dead",
    label: "Dead",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];

const gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Genderless",
    label: "Genderless",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];

export default function SideBar() {
  const [charStatus, setCharStatus] = useState("");

  const [charGender, setCharGender] = useState("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharStatus(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharGender(event.target.value);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 380,
        p: 1,
        m: 0,
        mt: 7,
        ml: 5,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ mb: 9 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Status"
        value={charStatus}
        onChange={handleStatusChange}
        helperText="Please select Status"
        sx={{ mb: 6, width: 190 }}
      >
        {status.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Gender"
        value={charGender}
        onChange={handleGenderChange}
        helperText="Please select your currency"
        sx={{ width: 190 }}
      >
        {gender.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
