import { DialogProps } from "@mui/material";
import { ReactNode } from "react";

export interface IDialogProps extends DialogProps {
  modal?: boolean;
  titleSlot?: ReactNode;
  actionsSlot?: ReactNode;
}
