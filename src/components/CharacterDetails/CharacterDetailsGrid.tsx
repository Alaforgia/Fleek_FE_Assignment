import React from "react";

// MUI Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// redux hooks
import { useAppSelector } from "../../hooks/hooks";

// redux store
import { selectedCharacterDetails } from "../../store/slices/rickAndMortySlice";

const CharacterDetailsGrid = () => {
  const characterDetails = useAppSelector(selectedCharacterDetails);
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {characterDetails?.name && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Name: &nbsp;&nbsp;
            {characterDetails.name}
          </Typography>
        </Grid>
      )}
      {characterDetails?.status && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Status: &nbsp;&nbsp;
            {characterDetails.status}
          </Typography>
        </Grid>
      )}
      {characterDetails?.species && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Species: &nbsp;&nbsp;
            {characterDetails.species}
          </Typography>
        </Grid>
      )}
      {characterDetails?.type && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Type: &nbsp;&nbsp;
            {characterDetails.type}
          </Typography>
        </Grid>
      )}
      {characterDetails?.gender && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Gender: &nbsp;&nbsp;
            {characterDetails.gender}
          </Typography>
        </Grid>
      )}
      {characterDetails?.origin && characterDetails?.origin?.name && characterDetails?.origin?.url && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Origin: &nbsp;&nbsp;
            {characterDetails?.origin?.name}
          </Typography>
        </Grid>
      )}
      {characterDetails?.created && (
        <Grid item xs={2} sm={4} md={12}>
          <Typography variant="h5" component="h5" sx={{ ml: 3 }}>
            Date Created: &nbsp;&nbsp;
            {characterDetails.created.slice(0, 10)}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CharacterDetailsGrid;
