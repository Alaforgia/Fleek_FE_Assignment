/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import React from "react";
// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

// Redux Hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import {
  selectedEpisodeDetails,
  setSelectedEpisodeId,
  selectedCharacterDetails,
  getSelectedEpisodeDetails,
} from "../../store/slices/rickAndMortySlice";

const Episodes: React.FC = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.SyntheticEvent, currentEpisodeId: number) => {
    setValue(currentEpisodeId);
    dispatch(setSelectedEpisodeId({ id: currentEpisodeId }));
    dispatch(getSelectedEpisodeDetails({ episodeId: currentEpisodeId.toString() }));
  };
  const characterDetails = useAppSelector(selectedCharacterDetails);
  const episodeDetails = useAppSelector(selectedEpisodeDetails);

  // click handler for episode tab
  const handleEpisodeClick = (episodeId: number) => {};

  // useEffect that will query the api for episode details if the episode id is available
  useEffect(() => {
    if (
      characterDetails.episode[episodeDetails.id] !== "0" &&
      characterDetails.episode[episodeDetails.id] !== undefined
    ) {
      const splitUrl = characterDetails.episode[episodeDetails.id].split("/");
      const episodeId = splitUrl[splitUrl.length - 1];
      dispatch(getSelectedEpisodeDetails({ episodeId: episodeId }));
    }
  }, []);

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
        indicatorColor="secondary"
        textColor="secondary"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {characterDetails.episode[0] !== "" &&
          characterDetails.episode.map((episode, index) => {
            const url: string = episode;
            const splitUrl = url.split("/");
            const episodeId = splitUrl[splitUrl.length - 1];
            return (
              <Tab
                className="episode-tab"
                label={`Episode ${episodeId}`}
                key={index}
                value={episodeId}
                sx={{
                  backgroundColor: "primary.main",
                }}
              />
            );
          })}
      </Tabs>
      <Box
        sx={{
          my: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          ml: 12,
        }}
      >
        <Stack spacing={2}>
          {episodeDetails?.id && (
            <Typography variant="h5" component="h5">
              ID: {episodeDetails?.id}
            </Typography>
          )}
          {episodeDetails?.name && (
            <Typography variant="h5" component="h5">
              Name: {episodeDetails?.name}
            </Typography>
          )}
          {episodeDetails?.air_date && (
            <Typography variant="h5" component="h5">
              Air Date: {episodeDetails?.air_date}
            </Typography>
          )}
          {episodeDetails?.episode && (
            <Typography variant="h5" component="h5">
              Episode: {episodeDetails?.episode}
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Episodes;
