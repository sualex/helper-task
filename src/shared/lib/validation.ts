import * as zod from "zod";

export const nullableString = ({ min = 0, message = "" } = {}) =>
  zod
    .string({
      required_error: message,
    })
    .trim()
    .min(min, { message })
    .nullable();

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
