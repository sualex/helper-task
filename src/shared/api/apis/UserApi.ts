/* tslint:disable */

/* eslint-disable */

/**
 * test-front API
 * test-front API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileDto } from "../models/index";
import { ProfileDtoFromJSON, ProfileDtoToJSON } from "../models/index";
import * as runtime from "../runtime";

export interface UserRequest {
  slug: string;
}

/**
 *
 */
export class UserApi extends runtime.BaseAPI {
  /**
   */
  async userRaw(
    requestParameters: UserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ProfileDto>> {
    if (
      requestParameters.slug === null ||
      requestParameters.slug === undefined
    ) {
      throw new runtime.RequiredError(
        "slug",
        "Required parameter requestParameters.slug was null or undefined when calling user."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/user/{slug}`.replace(
          `{${"slug"}}`,
          encodeURIComponent(String(requestParameters.slug))
        ),
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

  /**
   */
  async user(
    requestParameters: UserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ProfileDto> {
    const response = await this.userRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async usersRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<ProfileDto>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/user`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(ProfileDtoFromJSON)
    );
  }

  /**
   */
  async users(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<ProfileDto>> {
    const response = await this.usersRaw(initOverrides);
    return await response.value();
  }
}
