import * as zod from "zod";

export const requiredString = ({
  min = 1,
  message = "Обязательное поле",
} = {}) =>
  zod
    .string({
      required_error: message,
    })
    .trim()
    .min(min, { message });

export const requiredEmail = ({ message = "Неверный формат E-mail" } = {}) =>
  requiredString().email({
    message,
  });
