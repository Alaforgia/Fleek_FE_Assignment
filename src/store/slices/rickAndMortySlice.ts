import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { RickAndMortyState } from "../../types";

const initialState: RickAndMortyState = {
  rickAndMortyCharacters: [],
  filteredRickAndMortyCharacters: [],
  selectedCharacterDetails: {
    created: "",
    episode: [
      {
        url: "",
      },
    ],
    id: 0,
    image: "",
    gender: "",
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
  },
  characterDetailEpisodes: [
    {
      id: 0,
      name: "",
      air_date: "",
      episode: "",
      characters: [""],
      url: "",
      created: "",
    },
  ],
  name: "",
  gender: "",
  status: "",
  pending: false,
  error: false,
  currentPage: 1,
};

// TODO: Recheck this
export const getRickAndMortyCharacterEpisodes = createAsyncThunk(
  "rickAndMorty/getRickAndMortyCharacterEpisodes",
  async (data: { name: string }) => {
    const query = data.name;
    console.log("getRickAndMortyCharacterDetails", query);
    const response = await fetch(`https://rickandmortyapi.com/api/episode?characters=${query}`);
    const dataResponse = await response.json();
    console.log(dataResponse);
    return dataResponse;
  }
);

export const getRickAndMortyCharacterDetails = createAsyncThunk(
  "rickAndMorty/getRickAndMortyCharacterDetails",
  async (data: { id: string }) => {
    const query = data.id;
    console.log("getRickAndMortyCharacterDetails", query);
    const response = await fetch(`https://rickandmortyapi.com/api/character/${query}`);
    const dataResponse = await response.json();
    console.log(dataResponse);
    return dataResponse;
  }
);

/**
 * @description This is the main slice that handles all the data fetching and filtering
 */
export const getFilteredCharacterList = createAsyncThunk(
  "rickAndMorty/getFilteredCharacterList",
  async (data: { name?: string; gender?: string; status?: string; page?: string }) => {
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
      query += `&page=${data.page}`;
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${query}`);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredCharacterList.pending, (state) => {
        state.pending = true;
      })
      .addCase(getFilteredCharacterList.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.rickAndMortyCharacters = payload.results;
        state.filteredRickAndMortyCharacters = payload.results;
      })
      .addCase(getFilteredCharacterList.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getRickAndMortyCharacterDetails.pending, (state) => {
        state.pending = true;
      })
      .addCase(getRickAndMortyCharacterDetails.fulfilled, (state, { payload }) => {
        console.log("getRickAndMortyCharacterDetails.fulfilled", payload);
        state.pending = false;
        state.selectedCharacterDetails = payload;
      })
      .addCase(getRickAndMortyCharacterDetails.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getRickAndMortyCharacterEpisodes.pending, (state) => {
        state.pending = true;
      })
      .addCase(getRickAndMortyCharacterEpisodes.fulfilled, (state, { payload }) => {
        console.log("getRickAndMortyCharacterEpisodes.fulfilled", payload.results);
        state.pending = false;
        state.characterDetailEpisodes = payload.results;
      })
      .addCase(getRickAndMortyCharacterEpisodes.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { setName, setGender, setStatus, setCurrentPage } = rickAndMortySlice.actions;

export const selectName = (state: RootState) => state.rickAndMortyCharacters.name;
export const selectFilteredRickAndMortyCharacters = (state: RootState) =>
  state.rickAndMortyCharacters.filteredRickAndMortyCharacters;
export const selectedCharacterDetails = (state: RootState) => state.rickAndMortyCharacters.selectedCharacterDetails;
export const selectedCharacterEpisodes = (state: RootState) => state.rickAndMortyCharacters.characterDetailEpisodes;

export default rickAndMortySlice.reducer;
