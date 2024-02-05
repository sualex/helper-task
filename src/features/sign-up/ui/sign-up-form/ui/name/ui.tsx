import { css } from "@emotion/react";
import InputAdornment from "@mui/material/InputAdornment";
import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

import IconUser from "@/shared/ui/icons/user.svg";

export function Name({
  ...props
}: Omit<TextFieldElementProps, "variant" | "name">) {
  return (
    <TextFieldElement
      name="name"
      placeholder="Имя"
      required
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="end"
            sx={{
              marginRight: 0,
            }}
          >
            <IconUser />
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
