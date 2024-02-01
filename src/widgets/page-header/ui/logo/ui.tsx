import { Box } from "@mui/material";
import Image, { ImageProps } from "next/image";

import { NextLinkBehaviour } from "@/shared/ui";

export function Logo({ ...props }: Omit<ImageProps, "src" | "alt">) {
  return (
    <Box component={NextLinkBehaviour} href="/" display="flex">
      <Image alt="Logo" src="/logo.png" width={80} height={50} {...props} />
    </Box>
  );
}
