import * as apis from "./yoldi";
import * as runtime from "./yoldi";

export const configuration = new runtime.Configuration({
  basePath: "",
  headers: {
    Accept: "application/json",
  },
});

export const authApi = new apis.AuthApi(configuration);
export const profileApi = new apis.ProfileApi(configuration);
export const userApi = new apis.UserApi(configuration);
