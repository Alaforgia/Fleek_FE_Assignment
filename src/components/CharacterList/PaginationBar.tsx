import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Info } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  currentPage,
  setCurrentPage,
  getRickAndMortyCharacters,
  selectName,
  selectGender,
  selectStatus,
} from "../../store/slices/rickAndMortySlice";

// MUI utils
import useMediaQuery from "@mui/material/useMediaQuery";

const PaginationBar: React.FC<{ paginationInfo: Info }> = ({
  paginationInfo,
}) => {
  const isDesktopView = useMediaQuery("(min-width:768px)");
  const currentPageNumber = useAppSelector(currentPage);
  const currentName = useAppSelector(selectName);
  const currentGender = useAppSelector(selectGender);
  const currentStatus = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newPageNumber: number
  ) => {
    dispatch(setCurrentPage(newPageNumber));
    let query: {
      name?: string;
      gender?: string;
      status?: string;
      page?: string;
    } = {};

    if (currentName) {
      query.name = currentName;
    }
    if (currentGender) {
      query.gender = currentGender;
    }
    if (currentStatus) {
      query.status = currentStatus;
    }
    if (newPageNumber) {
      query.page = newPageNumber.toString();
    }
    dispatch(getRickAndMortyCharacters(query));
  };
  return (
    <Stack spacing={2} sx={{ width: "100%", py: "2rem" }}>
      {isDesktopView ? (
        <Pagination
          count={paginationInfo?.pages}
          showFirstButton
          showLastButton
          page={currentPageNumber}
          onChange={handleChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        // <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination
          count={paginationInfo?.pages}
          defaultPage={6}
          siblingCount={0}
          boundaryCount={1}
          showFirstButton
          showLastButton
          page={currentPageNumber}
          onChange={handleChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Stack>
  );
};

export default PaginationBar;
