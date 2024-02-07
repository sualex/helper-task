import { css } from "@emotion/react";
import { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { useCommon } from "@/shared/lib";
import { Section } from "@/shared/ui";

import { RootError } from "../root-error";

export function FieldSection({
  children,
  gutter = 35,
  ...props
}: StackProps & {
  gutter?: number;
}) {
  const { pxToRem } = useCommon();
  return (
    <Section
      spacing={pxToRem(15)}
      css={css`
        &&& > * {
          padding: 0 ${pxToRem(gutter)};
        }
      `}
      {...props}
    >
      <RootError />
      {children}
    </Section>
  );
}
