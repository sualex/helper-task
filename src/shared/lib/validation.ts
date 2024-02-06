import * as zod from "zod";

export const requiredString = zod
  .string({
    required_error: "Обязательное поле",
  })
  .trim()
  .min(1, { message: "Обязательное поле" });

export const requiredEmail = requiredString.email({
  message: "Неверный формат E-mail",
});
