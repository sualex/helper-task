import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export function useMediaDown(key: Breakpoint | number = "md") {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key));
}
