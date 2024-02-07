import { css } from "@emotion/react";
import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

export function Description({
  ...props
}: Omit<TextFieldElementProps, "variant">) {
  return (
    <TextFieldElement
      multiline
      css={css`
        &&& {
          .MuiInputBase-root {
            padding-left: 8px;
            padding-right: 8px;
          }
        }
      `}
      {...props}
    />
  );
}
