import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import z from "zod";

import { RickAndMortyState } from "../../types";

const initialState: RickAndMortyState = {
  rickAndMortyCharacters: [],
  filteredRickAndMortyCharacters: [],
  selectedCharacterDetails: {
    created: "",
    episode: [""],
    id: 0,
    image: "",
    gender: "",
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
  },
  selectedEpisodeDetails: {
    id: 0,
    name: "",
    air_date: "",
    episode: "",
    created: "",
  },
  selectedCharacterEpisodes: [],
  name: "",
  gender: "",
  status: "",
  pending: false,
  error: false,
  currentPage: 1,
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};

export const populateSelectedCharacterEpisodes = (state: RootState) => {
  const selectedCharacterEpisodeIds =
    state.rickAndMortyCharacters.selectedCharacterDetails.episode.map((url) => {
      // function that takes a string url and returns everything after the last slash

      const splitUrl = url.split("/");

      const episodeId = splitUrl[splitUrl.length - 1];

      return {
        id: episodeId,
      };
    });

  selectedCharacterEpisodeIds.map(async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const { data, errors } = await response.json();

    if (response.ok) {
      state.rickAndMortyCharacters.selectedCharacterEpisodes.push(data);
    }
    if (errors) {
      throw new Error(errors[0].message);
    }
  });
};

export const getSelectedEpisodeDetails = createAsyncThunk(
  "rickAndMorty/getSelectedEpisodeDetails",
  async (data: { episodeId: string }) => {
    const query = data.episodeId;
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${query}`
    );
    const dataResponse = await response.json();
    return dataResponse;
  }
);

export const getRickAndMortyCharacterDetails = createAsyncThunk(
  "rickAndMorty/getRickAndMortyCharacterDetails",
  async (data: { id: string }) => {
    const query = data.id;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${query}`
    );
    const dataResponse = await response.json();

    return dataResponse;
  }
);

/**
 * @description This is the main slice that handles all the data fetching and filtering
 */
export const getRickAndMortyCharacters = createAsyncThunk(
  "rickAndMorty/getRickAndMortyCharacters",
  async (data: {
    name?: string;
    gender?: string;
    status?: string;
    page?: string;
  }) => {
    let query = "";
    if (data.name) {
      query += `?name=${data.name}`;
      if (data.gender) {
        query += `&gender=${data.gender}`;
      }
      if (data.status) {
        query += `&status=${data.status}`;
      }
    } else {
      if (data.gender) {
        query += `?gender=${data.gender}`;
        if (data.status) {
          query += `&status=${data.status}`;
        }
      } else {
        if (data.status) {
          query += `?status=${data.status}`;
        }
      }
    }
    if (data.page) {
      if (query === "") {
        query += `?page=${data.page}`;
      } else {
        query += `&page=${data.page}`;
      }
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${query}`
    );
    return await response.json();
  }
);

export const rickAndMortySlice = createSlice({
  name: "rickAndMortyCharacters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSelectedEpisodeId(state, action: PayloadAction<{ id: number }>) {
      state.selectedEpisodeDetails.id = action.payload.id;
      // getSelectedEpisodeDetails({
      //   episodeId: state.selectedEpisodeDetails.id.toString(),
      // });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRickAndMortyCharacters.pending, (state) => {
        state.pending = true;
      })
      .addCase(getRickAndMortyCharacters.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.rickAndMortyCharacters = payload.results;
        state.info = payload.info;
        state.filteredRickAndMortyCharacters = payload.results;
      })
      .addCase(getRickAndMortyCharacters.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getRickAndMortyCharacterDetails.pending, (state) => {
        state.pending = true;
      })
      .addCase(
        getRickAndMortyCharacterDetails.fulfilled,
        (state, { payload }) => {
          state.pending = false;
          state.selectedCharacterDetails = payload;
        }
      )
      .addCase(getRickAndMortyCharacterDetails.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getSelectedEpisodeDetails.pending, (state) => {
        state.pending = true;
      })
      .addCase(getSelectedEpisodeDetails.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.selectedEpisodeDetails = payload;
      })
      .addCase(getSelectedEpisodeDetails.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const {
  setName,
  setGender,
  setStatus,
  setCurrentPage,
  setSelectedEpisodeId,
} = rickAndMortySlice.actions;

export const selectName = (state: RootState) =>
  state.rickAndMortyCharacters.name;
export const selectGender = (state: RootState) =>
  state.rickAndMortyCharacters.gender;
export const selectStatus = (state: RootState) =>
  state.rickAndMortyCharacters.status;
export const selectFilteredRickAndMortyCharacters = (state: RootState) =>
  state.rickAndMortyCharacters.filteredRickAndMortyCharacters;
export const selectedCharacterDetails = (state: RootState) =>
  state.rickAndMortyCharacters.selectedCharacterDetails;
export const selectedEpisodeDetails = (state: RootState) =>
  state.rickAndMortyCharacters.selectedEpisodeDetails;
export const info = (state: RootState) => state.rickAndMortyCharacters.info;
export const currentPage = (state: RootState) =>
  state.rickAndMortyCharacters.currentPage;

export default rickAndMortySlice.reducer;
