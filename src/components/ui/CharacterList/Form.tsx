import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Redux Hooks
import { useAppDispatch } from "../../../hooks/hooks";

// Redux Actions
import { getFilteredCharacterList, setName, setGender, setStatus } from "../../../store/slices/rickAndMortySlice";

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
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    dispatch(getFilteredCharacterList(data));
    if (data.name) {
      dispatch(setName(data.name));
    }
    if (data.gender) {
      dispatch(setGender(data.gender));
    }
    if (data.status) {
      dispatch(setStatus(data.status));
    }
    console.log(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <select {...register("gender")}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unknown">Unknown B</option>
      </select>
      <select {...register("status")}>
        <option value="">Select Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown B</option>
      </select>
      <input type="submit" />
    </form>
  );
}
