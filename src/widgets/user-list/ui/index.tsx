import { css } from "@emotion/react";
import { LinearProgress, List, ListProps } from "@mui/material";
import * as React from "react";

import { UserListItem } from "@/entities/user";
import { useUsers } from "@/entities/user/model";
import { useCommon } from "@/shared/lib";
import { Article, H1, Nav } from "@/shared/ui";

export const UserList = ({ ...props }: ListProps) => {
  const { pxToRem } = useCommon();
  const users = useUsers();
  return (
    <Article spacing={pxToRem(30)} padding={`${pxToRem(25)} 0`}>
      <H1>Список аккаунтов</H1>
      {!users?.data ? (
        <LinearProgress />
      ) : (
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
      )}
    </Article>
  );
};
