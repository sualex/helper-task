import { Button, ButtonProps, Dialog } from "@mui/material";
import { useState } from "react";

import { useUser } from "@/entities/user";
import { EditProfileForm } from "@/features/edit-profile";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";
import IconPenSolid from "@/shared/ui/icons/pen-solid.svg";

export const EditProfileLink = ({ ...props }: ButtonProps) => {
  const { pxToRem } = useCommon();
  const isMobile = useMediaDown("sm");
  const [isOpen, setIsOpen] = useState(false);

  const profile = useUser();
  //eslint-disable-next-line unused-imports/no-unused-vars
  const { cover, email, image, ...defaultValues } = profile?.data || {};

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
        <EditProfileForm defaultValues={defaultValues} setIsOpen={setIsOpen} />
      </Dialog>
    </>
  );
};
