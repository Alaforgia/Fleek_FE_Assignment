/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

// Redux Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import {
  selectedCharacterEpisodes,
  getRickAndMortyCharacterEpisodes,
  selectedCharacterDetails,
} from "../../../store/slices/rickAndMortySlice";

const Episodes: React.FC = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const characterDetails = useAppSelector(selectedCharacterDetails);
  const episodeDetails = useAppSelector(selectedCharacterEpisodes);
  useEffect(() => {
    console.log("episodestest: ", episodeDetails);
    if (episodeDetails[0].name === "") {
      dispatch(getRickAndMortyCharacterEpisodes({ name: characterDetails.name }));
    }
    console.log("value: ", value);
  }, [episodeDetails, characterDetails, value]);
  // getRickAndMortyCharacterEpisodes
  return (
    <Box
      className="episodes"
      sx={{
        marginBottom: "100px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {episodeDetails?.map((episode) => (
          <Tab label={episode.name} key={episode.id} />
        ))}
      </Tabs>
      <Box
        sx={{
          my: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Stack spacing={2}>
          {episodeDetails[value]?.id && (
            <Typography variant="h5" component="h5">
              ID: {episodeDetails[value]?.id}
            </Typography>
          )}
          {episodeDetails[value]?.name && (
            <Typography variant="h5" component="h5">
              Name: {episodeDetails[value]?.name}
            </Typography>
          )}
          {episodeDetails[value]?.air_date && (
            <Typography variant="h5" component="h5">
              Air Date: {episodeDetails[value]?.air_date}
            </Typography>
          )}
          {episodeDetails[value]?.episode && (
            <Typography variant="h5" component="h5">
              Episode: {episodeDetails[value]?.episode}
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Episodes;
