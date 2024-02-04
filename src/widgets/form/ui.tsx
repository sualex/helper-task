import { Typography, useTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import {
  FieldPath,
  FieldValues,
  FormContainer,
  FormContainerProps,
  useForm,
} from "react-hook-form-mui";

import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";

export function Form<Fields extends FieldValues>({
  autoFocusField,
  children,
  resolver,
  defaultValues,
  FormProps = {},
  ...props
}: FormContainerProps<Fields> & {
  autoFocusField?: FieldPath<Fields>;
  defaultValues?: Fields;
}) {
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
        setIsFetching(true);
        try {
          await props?.onSuccess?.(fields);
        } catch (error) {
          setErrorMessage((await getError(error))?.message);
        } finally {
          setIsFetching(false);
        }
      }}
      FormProps={$FormProps}
      {...props}
    >
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      {children}
    </FormContainer>
  );
}
