import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

import IconPenSolid from "@/shared/ui/icons/pen-solid.svg";

export const EditProfileLink = ({ ...props }: ButtonProps) => {
  return (
    <Button variant="secondary" startIcon={<IconPenSolid />} {...props}>
      Редактировать
    </Button>
  );
};
