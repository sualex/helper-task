import { css } from "@emotion/react";
import { NoSsr, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/router";
import * as React from "react";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

import { useCommon, useMediaDown } from "@/shared/lib";

export function Slug({ ...props }: Omit<TextFieldElementProps, "variant">) {
  const router = useRouter();
  const { theme } = useCommon();

  const isMobile = useMediaDown("sm");

  return (
    <TextFieldElement
      InputProps={{
        ...(!isMobile && {
          startAdornment: (
            <InputAdornment
              position="start"
              css={css`
                &&& {
                  margin-right: 0;
                  margin-left: -8px;
                  padding: 0 20px;
                  max-height: revert;
                  height: 50px;
                  background: ${theme?.palette?.backgroundSecondary?.main};
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                  border-right: 1px solid
                    ${theme?.palette?.strokesPrimary?.main};
                }
              `}
            >
              <NoSsr>
                <Typography>{`${window.location.host}/${router?.route?.split("/")?.[1]}`}</Typography>
              </NoSsr>
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
