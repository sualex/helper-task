import { useRouter } from "next/router";
import useSWR from "swr";

import { profileApi, userApi } from "@/shared/api";
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

export function useMyProfile() {
  const router = useRouter();
  return useSWR(
    () => ["/api/profile"],
    async (url) => {
      const prof = await profileApi?.myProfile();
      return prof;
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
}

export function useUsers() {
  return useSWR(
    "/api/user",
    (url) => {
      return userApi?.users();
    },
    {
      revalidateOnFocus: false,
    }
  );
}
