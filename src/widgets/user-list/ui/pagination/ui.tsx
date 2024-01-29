import { css } from "@emotion/react";
import {
  Pagination as MuiPagination,
  PaginationItem,
  PaginationProps,
} from "@mui/material";

import { Link } from "@/shared/ui";

export function Pagination({ ...props }: PaginationProps) {
  return (
    <MuiPagination
      size="large"
      color="primary"
      renderItem={(item) => {
        return (
          <PaginationItem
            component={Link}
            href={{
              pathname: "/elements/[page]",
              query: {
                page: item.page,
              },
            }}
            {...item}
          />
        );
      }}
      css={css`
        && {
          .MuiPagination-ul {
            gap: 0.5rem;
          }
        }
      `}
      {...props}
    />
  );
}
