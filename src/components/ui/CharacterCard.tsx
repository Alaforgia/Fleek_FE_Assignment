import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader, createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getCharacter } from "../../utils/characters";
import { black } from "@mui/material/colors";
import { flexbox } from "@mui/system";
import { relative } from "path";

const rick = getCharacter(1);

const theme = createTheme({
  typography: {
    // fontWeight: "bold",
    fontSize: 18,
    // pb: 1.5,
    // ml: 1.5,
  },
  spacing: 2,
  palette: {
    primary: {
      main: black[500],
    },
  },
});

const card = (
  <React.Fragment>
    <CardHeader
      sx={{
        p: 0,
        mb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "limegreen",
        height: 65,
      }}
      // component={Typography}
      title={
        <Typography
          sx={{
            fontSize: 19,
            textAlign: "center",
            p: 0,
            mb: 0,
          }}
          color="text.secondary"
          // gutterBottom
        >
          Character Logo
        </Typography>
      }
    />
    <CardContent
      sx={{ p: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}
    >
      <Typography
        component="div"
        color="text.secondary"
        sx={{ color: "black", fontWeight: "bold", fontSize: 18, pb: 1.5, ml: 1.5 }}
      >
        Name
        <br />
      </Typography>
      <Typography
        component="div"
        color="text.secondary"
        sx={{ color: "black", fontWeight: "bold", fontSize: 18, pb: 1.5, ml: 1.5 }}
      >
        Specie
        <br />
      </Typography>
      <Typography
        component="div"
        color="text.secondary"
        sx={{ color: "black", fontWeight: "bold", fontSize: 18, pb: 0, ml: 1.5 }}
      >
        Status
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        position: "relative",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bottom: "-11.1%",
        // alignContent: "flex-end",
        // alignSelf: "flex-end",
        p: 1,
        bgcolor: "gray",
      }}
    >
      <Button
        sx={{
          position: "relative",
          bgcolor: "red",
          border: "1px solid red",
          borderRadius: 2,
          p: 1.5,
          m: 1.5,
          alignContent: "center",
        }}
      >
        Details
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function CharacterCards() {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
          width: 420,
          height: 320,
          // textAlign: "center",
          border: 0,
          borderRadius: 5.5,
        }}
      >
        {card}
      </Card>

      {/* <div>{rick}</div> */}
    </>
  );
}
