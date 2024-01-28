import { ButtonProps, Stack } from "@mui/material";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";

export function Logo({ ...props }: ButtonProps) {
  const xs = useMediaDown("sm");
  return (
    <Stack />
    // <NavLink
    //   href="/"
    //   css={css`
    //     margin-left: -0.5rem;
    //   `}
    //   {...props}
    // >
    //   {`Home${xs ? "" : "Page"}`}
    // </NavLink>
  );
}
