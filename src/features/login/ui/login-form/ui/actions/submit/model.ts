import * as zod from "zod";

import { email } from "@/features/login/ui/login-form/ui/email";
import { password } from "@/features/login/ui/login-form/ui/password";

export const loginFormSubmitButtonValidationSchema = zod.object({
  email,
  password,
});
