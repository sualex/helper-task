import * as zod from "zod";

export const schema = zod.object({
  email: zod
    .string({
      required_error: "Обязательное поле",
    })
    .trim()
    .min(1, { message: "Обязательное поле" }),
  password: zod.string().trim().min(1, { message: "Обязательное поле" }),
});
