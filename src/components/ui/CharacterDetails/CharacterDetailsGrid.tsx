// MUI Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// redux hooks
import { useAppSelector } from "../../../hooks/hooks";

// redux store
import { selectedCharacterDetails } from "../../../store/slices/rickAndMortySlice";

const CharacterDetailsGrid = () => {
  const characterDetails = useAppSelector(selectedCharacterDetails);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {characterDetails?.name && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.name}
          </Typography>
        </Grid>
      )}
      {characterDetails?.status && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.status}
          </Typography>
        </Grid>
      )}
      {characterDetails?.species && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.species}
          </Typography>
        </Grid>
      )}
      {characterDetails?.type && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.type}
          </Typography>
        </Grid>
      )}
      {characterDetails?.gender && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.gender}
          </Typography>
        </Grid>
      )}
      {characterDetails?.origin &&
        characterDetails?.origin?.name &&
        characterDetails?.origin?.url && (
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h5" component="h5">
              {characterDetails?.origin?.name}
            </Typography>
          </Grid>
        )}
      {characterDetails?.created && (
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h5">
            {characterDetails.created.slice(0, 10)}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CharacterDetailsGrid;
