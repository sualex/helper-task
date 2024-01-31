import * as runtime from "@/shared/api/yoldi/runtime";

import {
  Configuration,
  ProfileApi,
  ProfileDtoFromJSON,
  UserApi,
  AuthApi as YAuthApi,
} from "./yoldi";

const configuration = new Configuration({
  basePath: "",
  headers: {},
});

class AuthApi extends YAuthApi {
  async logoutRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<object>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // X-API-KEY authentication
    }

    const response = await this.request(
      {
        path: `/api/auth/logout`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ProfileDtoFromJSON(jsonValue)
    );
  }

  async logout(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<object> {
    const response = await this.logoutRaw(initOverrides);
    return await response.value();
  }
}

export const authApi = new AuthApi(configuration);
export const profileApi = new ProfileApi(configuration);
export const userApi = new UserApi(configuration);

export * from "./yoldi";
