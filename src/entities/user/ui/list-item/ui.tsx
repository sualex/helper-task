import { css } from "@emotion/react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";

import { ProfileDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { NextLinkBehaviour } from "@/shared/ui";

export const UserListItem = ({
  profile,
  ...props
}: ListItemProps & {
  profile: ProfileDto;
}) => {
  const isMobile = useMediaDown("sm");
  const theme = useTheme();
  return (
    <ListItem
      disablePadding
      secondaryAction={
        !isMobile ? <Typography>{profile?.email}</Typography> : null
      }
      css={css`
        &&& {
          :first-of-type {
            border-top: 1px solid #e6e6e6;
          }
          border-bottom: 1px solid #e6e6e6;
          .MuiListItemSecondaryAction-root,
          .MuiListItemText-secondary {
            color: #838383;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: left;
          }
          .MuiAvatar-root {
            color: ${theme?.palette?.common?.black};
            background-color: #f3f3f3;
            border: 1px solid #e6e6e6;
          }
        }
      `}
      {...props}
    >
      <ListItemButton
        component={NextLinkBehaviour}
        disableRipple={false}
        href={`/profile/${profile?.email}`}
        css={css`
          gap: 20px;
          padding: ${isMobile ? "4px 8px" : "8px 16px"};
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
          <Avatar sx={{ width: 50, height: 50 }}>{profile?.name?.[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={profile?.name}
          secondary={isMobile ? profile?.email : null}
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
