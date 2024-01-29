import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

export default function LoginElement({
  ...props
}: Omit<TextFieldElementProps, "variant">) {
  return (
    <TextFieldElement
      label="Phone"
      placeholder="+799999999"
      required
      validation={{
        required: "Required",
      }}
      {...props}
    />
  );
}
