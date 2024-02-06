import { useTheme } from "@mui/material";
import { useMemo } from "react";

export function useCommon() {
  const theme = useTheme();
  return useMemo(
    () => ({
      pxToRem: theme?.typography?.pxToRem,
      theme,
    }),
    [theme]
  );
}
