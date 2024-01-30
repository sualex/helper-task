import { AuthApi, Configuration, ProfileApi, UserApi } from "./yoldi";

const configuration = new Configuration({
  basePath: "",
  headers: {},
});

export const authApi = new AuthApi(configuration);
export const profileApi = new ProfileApi(configuration);
export const userApi = new UserApi(configuration);

export * from "./yoldi";
