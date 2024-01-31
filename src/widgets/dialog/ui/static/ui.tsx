import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";

import { IDialogProps } from "@/widgets/dialog/types";

export function StaticDialog({ ...props }: IDialogProps) {
  return (
    <Paper
      component={Stack}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie banner"
      square
      variant="outlined"
      tabIndex={-1}
      sx={{
        m: 0,
        p: 0,
        borderWidth: 0,
      }}
      {...props}
    />
  );
}
