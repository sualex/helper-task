import { Button, ButtonProps, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { clearBodyLocks, lock } from "tua-body-scroll-lock";

import { useUser } from "@/entities/user";
import { EditProfileForm } from "@/features/edit-profile";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";
import IconPenSolid from "@/shared/ui/icons/pen-solid.svg";

export const EditProfileLink = ({ ...props }: ButtonProps) => {
  const { pxToRem } = useCommon();
  const sm = useMediaDown("sm");
  const [isOpen, setIsOpen] = useState(false);

  const profile = useUser();
  //eslint-disable-next-line unused-imports/no-unused-vars
  const { cover, email, image, ...defaultValues } = profile?.data || {};

  useEffect(() => {
    if (!isOpen) {
      clearBodyLocks();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const modalPaper = document.querySelector(
          ".MuiModal-root .MuiPaper-root"
        );
        if (modalPaper) {
          lock(modalPaper as HTMLElement);
        }
      }, 1);
    }
    return () => {};
  }, [isOpen]);

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
        fullScreen={sm}
        scroll={!sm ? "body" : "paper"}
        fullWidth
        maxWidth={!sm && "galaxyTab2"}
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
