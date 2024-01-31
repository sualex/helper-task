import { css } from "@emotion/react";
import InputAdornment from "@mui/material/InputAdornment";
import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

import IconEnvelope from "@/shared/ui/icons/envelope.svg";

export default function LoginElement({
  ...props
}: Omit<TextFieldElementProps, "variant">) {
  return (
    <TextFieldElement
      inputRef={(input) => input && input.focus()}
      // label="Phone"
      placeholder="E-mail"
      required
      validation={{
        required: "Обязательное поле",
        validate: (value) => {
          return (
            /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value) || "Неверный формат E-mail"
          );
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="end"
            sx={{
              marginRight: 0,
            }}
          >
            <IconEnvelope />
          </InputAdornment>
        ),
      }}
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
