import * as apis from "./apis/index";
import * as runtime from "./runtime";

export * from "./models/index";

export const AuthApi = new apis.AuthApi(
  new runtime.Configuration({
    basePath: "",
    headers: {
      Accept: "application/json",
    },
  })
);

export const ProfileApi = new apis.ProfileApi(
  new runtime.Configuration({
    basePath: "",
  })
);
