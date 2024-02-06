import { css } from "@emotion/react";
import { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { useCommon } from "@/shared/lib";
import { Section } from "@/shared/ui";

import { RootError } from "../root-error";

export function FieldSection({ children, ...props }: StackProps) {
  const { pxToRem } = useCommon();
  return (
    <Section
      spacing={pxToRem(15)}
      css={css`
        &&& > * {
          padding: 0 ${pxToRem(35)};
        }
      `}
      {...props}
    >
      <RootError />
      {children}
    </Section>
  );
}
