import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import {
  FieldPath,
  FieldValues,
  FormContainer,
  FormContainerProps,
  useForm,
} from "react-hook-form-mui";

import { useCommon, useMediaDown } from "@/shared/lib";
import { parseError } from "@/shared/lib/error";

export interface IFormProps<Fields extends FieldValues>
  extends FormContainerProps<Fields> {
  autoFocusField?: FieldPath<Fields>;
}

export function Form<Fields extends FieldValues>({
  autoFocusField,
  children,
  resolver,
  defaultValues,
  FormProps = {},
  onSuccess,
  ...props
}: IFormProps<Fields>) {
  const { pxToRem } = useCommon();

  const theme = useTheme();
  const isMobile = useMediaDown("sm");
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const methods = useForm<Fields>({
    resolver,
    defaultValues,
  });

  useEffect(() => {
    if (typeof autoFocusField === "string") {
      setTimeout(() => {
        methods.setFocus(autoFocusField);
      }, 5);
    }
  }, [autoFocusField, methods]);

  const { style, ...rest } = FormProps;

  const $FormProps = useMemo<typeof FormProps>(
    () => ({
      style: {
        display: "flex",
        flexDirection: "column",
        ...style,
      },
      ...rest,
    }),
    [rest, style]
  );

  return (
    <FormContainer
      formContext={methods}
      onSuccess={async (fields) => {
        if (typeof onSuccess === "function") {
          setIsFetching(true);
          try {
            await onSuccess(fields);
          } catch (error) {
            setErrorMessage((await parseError(error))?.message);
          } finally {
            setIsFetching(false);
          }
        }
      }}
      FormProps={$FormProps}
      {...props}
    >
      {errorMessage && (
        <Stack
          css={css`
            padding: 0 ${pxToRem(30)};
          `}
        >
          <Typography color="error">{errorMessage}</Typography>
        </Stack>
      )}
      {children}
    </FormContainer>
  );
}
