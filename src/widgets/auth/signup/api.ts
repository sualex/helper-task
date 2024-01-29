import useSWRMutation from "swr/mutation";

import { authApi } from "@/shared/api";
import { SignUpRequest } from "@/shared/api/yoldi";

export function useLoginMutation() {
  return useSWRMutation(
    "/api/user",
    (
      url,
      {
        arg: { requestParameters },
      }: { arg: { requestParameters: SignUpRequest } }
    ) => {
      return authApi?.signUp(requestParameters);
    }
  );
}
