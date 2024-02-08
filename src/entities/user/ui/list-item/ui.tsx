import { css } from "@emotion/react";
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";

import { UserAvatar } from "@/entities/user/ui/avatar";
import { ProfileDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { NextLinkBehaviour } from "@/shared/ui";

export const UserListItem = ({
  profile,
  ...props
}: ListItemProps & {
  profile: ProfileDto;
}) => {
  const sm = useMediaDown("sm");
  const theme = useTheme();
  return (
    <ListItem
      disablePadding
      secondaryAction={!sm ? <Typography>{profile?.email}</Typography> : null}
      css={css`
        &&& {
          :first-of-type {
            border-top: 1px solid ${theme?.palette?.strokesSecondary?.main};
          }
          border-bottom: 1px solid ${theme?.palette?.strokesSecondary?.main};
          .MuiListItemSecondaryAction-root,
          .MuiListItemText-secondary {
            color: ${theme?.palette?.gray?.main};
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: left;
          }
          .MuiAvatar-root {
            color: ${theme?.palette?.common?.black};
            background-color: ${theme?.palette?.backgroundSecondary?.main};
            border: 1px solid ${theme?.palette?.strokesSecondary?.main};
          }
        }
      `}
      {...props}
    >
      <ListItemButton
        component={NextLinkBehaviour}
        disableRipple={false}
        href={`/profile/${profile?.slug}`}
        css={css`
          gap: 20px;
          padding: ${sm ? "4px 8px" : "8px 16px"};
          :hover {
            background-color: rgba(0, 0, 0, 0.01);
          }
        `}
      >
        <ListItemAvatar
          css={css`
            min-width: auto;
          `}
        >
          <UserAvatar sx={{ width: 50, height: 50 }} profile={profile} />
        </ListItemAvatar>
        <ListItemText
          primary={profile?.name}
          secondary={
            sm ? <Typography noWrap>{profile?.email}</Typography> : null
          }
          css={css`
            &&& {
              .MuiListItemText-primary {
                font-size: 16px;
                font-weight: 500;
                line-height: 26px;
                letter-spacing: 0em;
                text-align: left;
              }
            }
          `}
        />
      </ListItemButton>
    </ListItem>
  );
};
