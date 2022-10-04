import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

// Redux Hooks
import { useAppDispatch } from "../../hooks/hooks";
import Box from "@mui/material/Box";

// Redux Actions
import {
  getRickAndMortyCharacters,
  setName,
  setGender,
  setStatus,
} from "../../store/slices/rickAndMortySlice";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormSchema = z.object({
  name: z.string().optional(),
  gender: z.string().optional(),
  status: z.string().optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function Form() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    dispatch(getRickAndMortyCharacters(data));
    if (data.name) {
      dispatch(setName(data.name));
    }
    if (data.gender) {
      dispatch(setGender(data.gender));
    }
    if (data.status) {
      dispatch(setStatus(data.status));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "2rem 1rem" }}>
        <FormControl sx={{ display: "block" }}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                {...field}
                sx={{ marginBottom: "1rem", width: "100%" }}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ display: "block" }}>
          <InputLabel id="gender">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                labelId="gender"
                label="Gender"
                id="gender-select"
                {...field}
                sx={{ marginBottom: "1rem", width: "100%" }}
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Unknown">Unknown B</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <FormControl sx={{ display: "block" }}>
          <InputLabel id="status">Status</InputLabel>
          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                labelId="Status"
                label="Status"
                id="Status-select"
                {...field}
                sx={{ marginBottom: "1rem", width: "100%" }}
              >
                <MenuItem value="">Select Status</MenuItem>
                <MenuItem value="Alive">Alive</MenuItem>
                <MenuItem value="Dead">Dead</MenuItem>
                <MenuItem value="Unknown">Unknown B</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <FormControl sx={{ display: "block" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ pt: "1rem", pb: "1rem", width: "100%" }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </form>
  );
}
