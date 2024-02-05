import * as zod from "zod";

import { email, password } from "./ui/submit-button/model";

export const loginFormValidationSchema = zod.object({
  email: email.email({
    message: "Неверный формат E-mail",
  }),
  password,
});
