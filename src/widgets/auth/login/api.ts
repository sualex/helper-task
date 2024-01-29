import useSWRMutation from "swr/mutation";

import { authApi } from "@/shared/api";
import { LoginRequest } from "@/shared/api/yoldi";

export function useLoginMutation() {
  return useSWRMutation(
    "/api/user",
    (
      url,
      {
        arg: { requestParameters },
      }: { arg: { requestParameters: LoginRequest } }
    ) => {
      return authApi?.login(requestParameters);
    }
  );
}