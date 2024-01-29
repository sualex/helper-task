import { css } from "@emotion/react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useCallback, useState } from "react";
import * as React from "react";
import {
  TextFieldElement,
  TextFieldElementProps,
  useWatch,
} from "react-hook-form-mui";

import IconLock from "@/shared/ui/icons/lock-solid.svg";

export default function PasswordElement({
  ...props
}: Omit<TextFieldElementProps, "variant">) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const isAdornmentVisible = useWatch({
    name: props?.name,
  });

  return (
    <TextFieldElement
      type={showPassword ? "text" : "password"}
      // label="Password"
      placeholder="Пароль"
      required
      validation={{
        required: "Обязательное поле",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="end"
            sx={{
              marginRight: 0,
            }}
          >
            <IconLock />
          </InputAdornment>
        ),
        ...(isAdornmentVisible && {
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                marginRight: 0,
              }}
            >
              <IconButton onClick={handleShowPassword}>
                {showPassword ? (
                  <VisibilityOffOutlinedIcon
                    // color="gray400"
                    aria-label="toggle password visibility"
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    // color="gray400"
                    aria-label="toggle password visibility"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }),
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
