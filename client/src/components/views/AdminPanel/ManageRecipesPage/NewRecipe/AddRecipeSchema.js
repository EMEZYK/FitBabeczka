import * as Yup from "yup";

export const addRecipeSchema = Yup.object({
  name: Yup.string().required("Podaj nazwę dania"),
  description: Yup.string().required("Podaj krótki opis dania"),
  ingredients: Yup.string().required("Podaj składniki"),
  preparation: Yup.string().required("Podaj opis przygotowania"),
  category: Yup.string().required("Wybierz kategorię"),
  servingsNumber: Yup.number().required("Podaj ilość porcji"),
  time: Yup.string().required("Podaj czas przygotowania"),
  difficultyLevel: Yup.string().required("Podaj poziom trudności"),
  image: Yup.object().nullable().optional(),
});
