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
import { useEffect } from "react";

import { UserListItem } from "@/entities/user";
import { getErrorMessage } from "@/shared/lib/error";
import { Article, Nav } from "@/shared/ui";

import { useUsers } from "../api";

export const UserList = ({ ...props }: ListProps) => {
  const router = useRouter();
  const theme = useTheme();

  const users = useUsers();

  useEffect(() => {
    console.log("xxxxxxxxxxxxxxxxxxxxxx ", users?.data);
  }, [users.data]);

  return users?.error ? (
    <Typography variant="h5" alignSelf="center">
      {getErrorMessage(users?.error)}
    </Typography>
  ) : (
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
      {users?.isLoading && <LinearProgress />}
      {!!users?.data && (
        <>
          <Nav aria-label="Cписок элементов">
            <List
              css={css`
                padding: 0;
              `}
              {...props}
            >
              {users?.data?.map((profile) => {
                return <UserListItem key={profile?.email} profile={profile} />;
              })}
            </List>
          </Nav>
          {/*<Divider />*/}
          {/*<Section direction="row" justifyContent="center" padding="0.5rem">*/}
          {/*  <Pagination*/}
          {/*    aria-label="Cписок страниц"*/}
          {/*    count={elements?.data?.pages}*/}
          {/*    page={Number(router?.query?.page) || 1}*/}
          {/*  />*/}
          {/*</Section>*/}
        </>
      )}
    </Article>
  );
};
