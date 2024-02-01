import { Typography, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import * as React from "react";
import {
  FieldValues,
  FormContainer,
  FormContainerProps,
} from "react-hook-form-mui";

import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";
import { DialogContent, DialogTitle } from "@/widgets/dialog";

export function AuthForm<T extends FieldValues>({
  title,
  children,
  ...props
}: FormContainerProps<T> & {
  title?: ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  return (
    <FormContainer
      // mode="onChange"
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
      FormProps={{
        style: {
          flex: isMobile ? 1 : "initial",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.common.white,
          gap: "25px",
          padding: "30px 0",
        },
      }}
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        {children}
      </DialogContent>
    </FormContainer>
  );
}
