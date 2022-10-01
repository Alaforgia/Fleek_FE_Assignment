import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography, { typographyClasses } from "@mui/material/Typography";
import { getCharacter } from "../../utils/characters";
import { styled, ThemeProvider, experimental_sx as sx } from "@mui/system";

const rick = getCharacter(1);

const TextThemeComponent = styled("p")(
  sx({
    color: "#000000",
    pt: 0,
    ml: 1.5,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Roboto",
    position: "relative",
    top: "-2.8%"
  })
);
const ButtonComponent = styled("button")(
  sx({
    position: "relative",
    bgcolor: "red",
    border: "2px solid red",
    borderRadius: 2,
    p: 1.0,
    m: 1.0,
    alignContent: "center",
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
      // component={CardHeaderTheme}
      title={
        <Typography
          sx={{
            fontSize: 19,
            textAlign: "center",
            p: 0,
            mb: 0,
          }}
        >
          Character Logo
        </Typography>
      }
    />
    <TextThemeComponent>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", pb: 0 }}
      >
        <Typography component="p" sx={{ pb: 3.3 }}>
          Name
          <br />
        </Typography>
        <Typography component="p" sx={{ pb: 3.3 }}>
          Specie
          <br />
        </Typography>
        <Typography component="p" sx={{ pb: 0 }}>
          Status
        </Typography>
      </CardContent>
    </TextThemeComponent>
    <CardActions
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        bottom: "7.6%",
        p: 0,
        bgcolor: "gray",
      }}
    >
      <ButtonComponent>
        <Button>Details</Button>
      </ButtonComponent>
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
