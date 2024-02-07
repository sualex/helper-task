import { css } from "@emotion/react";
import { LinearProgress, List, ListProps } from "@mui/material";
import * as React from "react";

import { UserListItem } from "@/entities/user";
import { useUsers } from "@/entities/user/model";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Article, H1, Nav } from "@/shared/ui";

export const UserList = ({ ...props }: ListProps) => {
  const { pxToRem } = useCommon();
  const isMobile = useMediaDown("sm");
  const users = useUsers();
  return (
    <Article spacing={3}>
      <div />
      <div />
      <H1 padding={`0 ${pxToRem(isMobile ? 20 : 0)}`}>Список аккаунтов</H1>
      {!users?.data ? (
        <LinearProgress />
      ) : (
        <>
          <Nav
            aria-label="Cписок элементов"
            padding={`0 ${pxToRem(isMobile ? 20 : 0)}`}
          >
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
