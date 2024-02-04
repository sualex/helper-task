import { useTheme } from "@mui/material";

export function useCommon() {
  const theme = useTheme();
  return {
    pxToRem: theme?.typography?.pxToRem,
    theme,
  };
}
