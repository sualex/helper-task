import * as zod from "zod";

import { email, name, password } from "./ui/submit-button/model";

export const signUpFormValidationSchema = zod.object({
  name,
  email: email.email({
    message: "Неверный формат E-mail",
  }),
  password,
});
