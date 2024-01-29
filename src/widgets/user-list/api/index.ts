import useSWR from "swr";

import { userApi } from "@/shared/api";

export function useUsers() {
  return useSWR("/api/user", (url) => {
    return userApi?.users();
  });
}
