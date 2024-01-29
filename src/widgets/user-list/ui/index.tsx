import { css } from "@emotion/react";
import {
  LinearProgress,
  List,
  ListProps,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

import { UserListItem } from "@/entities/user";
import { Article, Nav } from "@/shared/ui";

import { useUsers } from "../api";

export const UserList = ({ ...props }: ListProps) => {
  const router = useRouter();
  const theme = useTheme();
  const users = useUsers();
  return (
    <Article spacing={3} css={css``}>
      <div />
      <div />
      <Typography
        variant="h1"
        css={css`
          font-size: 30px;
          font-weight: 500;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
        `}
      >
        Список аккаунтов
      </Typography>
      {!users?.data ? (
        <LinearProgress />
      ) : (
        <>
          <Nav aria-label="Cписок элементов">
            <List
              css={css`
                padding: 0;
              `}
              {...props}
            >
              {users?.data?.map((profile) => {
                return <UserListItem key={profile?.slug} profile={profile} />;
              })}
            </List>
          </Nav>
        </>
      )}
    </Article>
  );
};
