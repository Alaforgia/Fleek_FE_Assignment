import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

const InformationDetails = () => {
  return (
    <>
      <Box sx={{ width: "50%", maxWidth: 300 }}>
        <Stack justifyContent="center" alignItems="center" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ lineHeight: 2.5, mr: 50}}>
            Name <br /> Status <br /> Specie <br /> Type <br /> Gender <br /> Origin <br /> Created
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default function CharacterInfo() {
  return (
    <>
      <InformationDetails />
    </>
  );
}
