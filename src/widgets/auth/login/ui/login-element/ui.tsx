import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

export default function LoginElement({
  ...props
}: Omit<TextFieldElementProps, "variant">) {
  return (
    <TextFieldElement
      // label="Phone"
      placeholder="E-mail"
      required
      validation={{
        required: "Обязательное поле",
      }}
      {...props}
    />
  );
}
