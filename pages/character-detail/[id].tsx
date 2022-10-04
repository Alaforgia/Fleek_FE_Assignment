/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../src/components/Layout/Layout";
import Episodes from "../../src/components/CharacterDetails/Episodes";
import CharacterDetailsGrid from "../../src/components/CharacterDetails/CharacterDetailsGrid";

// Libraries
import { z } from "zod";
import Image from "mui-image";

// Types
import type { NextPage } from "next";

// Mui Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Redux
import {
  getRickAndMortyCharacterDetails,
  selectedCharacterDetails,
  populateSelectedCharacterEpisodes,
} from "../../src/store/slices/rickAndMortySlice";

// Redux hooks
import { useAppSelector, useAppDispatch } from "../../src/hooks/hooks";

const CharacterDetailPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  // router.query.id can be a string or an array of strings or undefined, so we need to check if it's a string
  // Check if id is a string with zod
  const IdValidationSchema = z.string();
  const idValidationValue = IdValidationSchema.safeParse(id);
  const characterDetails = useAppSelector(selectedCharacterDetails);

  useEffect(() => {
    if (idValidationValue.success && characterDetails.id === 0) {
      dispatch(getRickAndMortyCharacterDetails({ id: idValidationValue.data }));
    }
  }, [idValidationValue, characterDetails]);

  return (
    <Layout isDetailPage={true}>
      <Container maxWidth="lg">
        <Head>
          <title>{`${characterDetails?.name} Details`}</title>
          <meta
            name="description"
            content={`Character and episode details about ${characterDetails}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid> */}
        <Grid
          container
          spacing={{ xs: 2, md: "3rem" }}
          columns={12}
          sx={{
            my: 4,
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            {characterDetails?.image && (
              <Image
                src={characterDetails?.image}
                alt={characterDetails?.name}
                showLoading
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CharacterDetailsGrid />
          </Grid>
        </Grid>
        <Episodes />
      </Container>
    </Layout>
  );
};

export default CharacterDetailPage;
