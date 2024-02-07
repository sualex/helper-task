import { Button, ButtonProps, Dialog } from "@mui/material";
import { useState } from "react";

import { EditProfileForm } from "@/features/edit-profile";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";
import IconPenSolid from "@/shared/ui/icons/pen-solid.svg";

export const EditProfileLink = ({ ...props }: ButtonProps) => {
  const { pxToRem } = useCommon();
  const isMobile = useMediaDown("sm");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="secondary"
        startIcon={<IconPenSolid />}
        {...props}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        Редактировать
      </Button>
      <Dialog
        open={isOpen}
        fullScreen={isMobile}
        scroll={!isMobile ? "body" : "paper"}
        fullWidth
        maxWidth={!isMobile && "galaxyTab2"}
        PaperComponent={StaticDialog}
        PaperProps={{
          spacing: pxToRem(25),
        }}
      >
        <EditProfileForm />
      </Dialog>
    </>
  );
};
