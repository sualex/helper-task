import { DialogProps } from "@mui/material";
import { ReactNode } from "react";

export interface IDialogProps extends Omit<DialogProps, "title"> {
  modal?: boolean;
  title?: ReactNode;
}
