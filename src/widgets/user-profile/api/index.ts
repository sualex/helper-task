import { useRouter } from "next/router";
import useSWR from "swr";

import { userApi } from "@/shared/api";
import { UserRequest } from "@/shared/api/yoldi";

export function useUser(requestParameters: UserRequest) {
  const router = useRouter();
  return useSWR(
    () => router?.isReady && ["/api/user", requestParameters.slug],
    (url) => {
      return userApi?.user(requestParameters);
    },
    {
      revalidateOnFocus: false,
    }
  );
}
