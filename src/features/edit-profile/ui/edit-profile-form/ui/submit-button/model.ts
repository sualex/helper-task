import * as zod from "zod";

export const name = zod
  .string()
  .trim()
  .min(1, { message: "Обязательное поле" });

export const email = zod
  .string({
    required_error: "Обязательное поле",
  })
  .trim()
  .min(1, { message: "Обязательное поле" });

export const password = zod
  .string()
  .trim()
  .min(1, { message: "Обязательное поле" });

export const schema = zod.object({
  name,
  email,
  password,
});
