/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../src/components/ui/Layout/Layout";
import Episodes from "../../src/components/ui/CharacterDetails/Episodes";
import CharacterDetailsGrid from "../../src/components/ui/CharacterDetails/CharacterDetailsGrid";

// Liberaries
import { z } from "zod";
import Image from "mui-image";

// Types
import type { NextPage } from "next";

// Mui Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// Redux
import { getRickAndMortyCharacterDetails, selectedCharacterDetails } from "../../src/store/slices/rickAndMortySlice";

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
      console.log("inside id check: ", idValidationValue.data);
      dispatch(getRickAndMortyCharacterDetails({ id: idValidationValue.data }));
    }
    console.log("characterDetails: ", characterDetails);
    console.log("episodes: ", characterDetails.episode);
  }, [idValidationValue, characterDetails]);

  return (
    <Layout isDetailPage={true}>
      <Container maxWidth="lg">
        <Head>
          <title>{`${characterDetails?.name} Details`}</title>
          <meta name="description" content={`Character and episode details about ${characterDetails}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {characterDetails?.image && <Image src={characterDetails?.image} alt={characterDetails?.name} showLoading />}
          <CharacterDetailsGrid />
        </Box>
        <Episodes />
      </Container>
    </Layout>
  );
};

export default CharacterDetailPage;
