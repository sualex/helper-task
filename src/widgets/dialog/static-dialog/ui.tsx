import { css } from "@emotion/react";
import { Paper, PaperProps } from "@mui/material";
import Stack from "@mui/material/Stack";

import { useMediaDown } from "@/shared/lib";

export function StaticDialog({ ...props }: PaperProps) {
  const isMobile = useMediaDown("sm");
  return (
    <Paper
      component={Stack}
      role="dialog"
      aria-modal="false"
      square
      elevation={0}
      css={css`
        flex: ${isMobile ? 1 : 0};
        margin: 0;
        padding: 0;
        border: none;
      `}
      {...props}
    />
  );
}
