import * as zod from "zod";

export const password = zod
  .string()
  .trim()
  .min(1, { message: "Обязательное поле" });
