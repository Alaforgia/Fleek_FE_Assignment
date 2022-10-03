import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

const page = <></>;

export default function MyPagination() {
  return (
    <>
      <Stack spacing={3}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          sx={{ color: "white", text: "white", bgcolor: "white" }}
        />
      </Stack>
      {/* {page} */}
    </>
  );
}
