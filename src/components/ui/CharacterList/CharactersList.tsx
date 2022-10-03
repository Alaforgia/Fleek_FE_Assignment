import React from "react";

// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Types
import { RickAndMortyCharacter } from "../../../types";

const CharactersList: React.FC<{ characters: RickAndMortyCharacter[] }> = ({
  characters,
}) => {
  return (
    <Box my={2}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {characters
          ? characters.slice(0, 20).map((character) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={character.id}
                sx={{ padding: 1 }}
              >
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={character.image}
                    alt={character.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      textAlign="left"
                    >
                      {character.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h6"
                      component="h3"
                      textAlign="left"
                    >
                      Species: {character.species}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h6"
                      component="h3"
                      textAlign="left"
                    >
                      Status: {character.status}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing={true} sx={{ padding: 0 }}>
                    <Button
                      component="a"
                      href={`/character-detail/${character.id}`}
                      size="small"
                      color="primary"
                      variant="contained"
                      sx={{
                        margin: "auto",
                        width: "100%",
                        borderRadius: 0,
                        paddingTop: 2,
                        paddingBottom: 2,
                      }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : "No Characters match your search"}
        {}
      </Grid>
    </Box>
  );
};

export default CharactersList;
