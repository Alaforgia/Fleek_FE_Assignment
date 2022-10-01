import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography, { typographyClasses } from "@mui/material/Typography";
import { getCharacter } from "../../utils/characters";
import { styled, ThemeProvider, experimental_sx as sx } from "@mui/system";

const rick = getCharacter(1);

const customTheme = createTheme({
  typography: {
    fontWeightBold: 1000,
    fontSize: 18,
    fontFamily: "Roboto",
    // pb: 1.5,
    // ml: 1.5,
  },
  spacing: 2.0,
  palette: {
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
});

const MyThemeComponent = styled("p")(
  sx({
    color: "primary.main",
    pt: 0.8,
    ml: 1.5,
    // font: "typography.fontSize",
    fontWeight: "bold",
  })
);

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

          // gutterBottom
        >
          Character Logo
        </Typography>
      }
    />
    <MyThemeComponent>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", pb: 0 }}
      >
        <Typography component="p" sx={{ pb: 3.5 }}>
          Name
          <br />
        </Typography>
        <Typography component="p" sx={{ pb: 3.5 }}>
          Specie
          <br />
        </Typography>
        <Typography component="p" sx={{ pb: 0 }}>
          Status
        </Typography>
      </CardContent>
    </MyThemeComponent>
    <CardActions
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        bottom: "-3.0%",
        p: 1,
        bgcolor: "gray",
      }}
    >
      <Button
        sx={{
          position: "relative",
          bgcolor: "red",
          border: "2px solid red",
          borderRadius: 2,
          p: 1.9,
          m: 5.4,
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
      <ThemeProvider theme={customTheme}>
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
      </ThemeProvider>

      {/* <div>{rick}</div> */}
    </>
  );
}
