import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

import { NextLinkBehaviour } from "@/shared/ui";

export const MuiButtonBase: Components<DefaultTheme>["MuiButtonBase"] = {
  defaultProps: {
    // make Button with href behave as Next link
    LinkComponent: NextLinkBehaviour,
    disableRipple: true,
  },
};
