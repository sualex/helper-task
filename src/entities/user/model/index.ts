import { useRouter } from "next/router";
import useSWR from "swr";

import { profileApi, userApi } from "@/shared/api";
import { UserRequest } from "@/shared/api/yoldi";

export function useUser() {
  const router = useRouter();
  const query = router.query as unknown;
  const requestParameters = query as UserRequest;
  return useSWR(
    () => requestParameters?.slug && ["/api/user", requestParameters.slug],
    () => {
      return userApi?.user(requestParameters);
    },
    {
      revalidateOnFocus: false,
    }
  );
}

export function useMyProfile() {
  return useSWR(
    () => ["/api/profile"],
    async () => {
      const prof = await profileApi?.myProfile();
      return prof;
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      // keepPreviousData: true,
    }
  );
}

export function useUsers() {
  return useSWR(
    "/api/user",
    () => {
      return userApi?.users();
    },
    {
      revalidateOnFocus: false,
    }
  );
}
