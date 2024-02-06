import * as zod from "zod";

export const email = zod
  .string({
    required_error: "Обязательное поле",
  })
  .trim()
  .min(1, { message: "Обязательное поле" });
