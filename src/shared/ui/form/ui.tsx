import { css } from "@emotion/react";
import { Typography } from "@mui/material";
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

import { useCommon } from "@/shared/lib";
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
  formContext,
  FormProps = {},
  onSuccess,
  ...props
}: IFormProps<Fields>) {
  const { pxToRem } = useCommon();
  const [errorMessage, setErrorMessage] = useState<string>();

  const methods = useForm<Fields>({
    resolver,
    defaultValues,
  });

  const form = useMemo(() => formContext || methods, [formContext, methods]);

  useEffect(() => {
    if (typeof autoFocusField === "string") {
      setTimeout(() => {
        form?.setFocus(autoFocusField);
      }, 5);
    }
  }, [autoFocusField, form]);

  const { style, ...rest } = FormProps;

  const $FormProps = useMemo<typeof FormProps>(
    () => ({
      style: {
        display: "flex",
        flexDirection: "column",
        gap: pxToRem(25),
        ...style,
      },
      ...rest,
    }),
    [pxToRem, rest, style]
  );

  return (
    <FormContainer
      formContext={form}
      onSuccess={async (fields) => {
        if (typeof onSuccess === "function") {
          try {
            await onSuccess(fields);
          } catch (error) {
            form?.setError("root.serverError", await parseError(error));
            setTimeout(() => {
              form?.clearErrors("root.serverError");
            }, 3000);
            // setErrorMessage((await parseError(error))?.message);
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
