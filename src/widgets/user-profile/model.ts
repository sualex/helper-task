import { useRouter } from "next/router";
import { useMemo } from "react";

import { useMyProfile } from "@/entities/user";

export function useIsMyProfile() {
  const router = useRouter();
  const myProfile = useMyProfile();

  return useMemo(() => {
    return router?.isReady && router?.query?.slug === myProfile?.data?.slug;
  }, [myProfile?.data?.slug, router?.isReady, router?.query?.slug]);
}
