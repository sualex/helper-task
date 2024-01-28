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
import { exists, mapValues } from "../runtime";

/**
 *
 * @export
 * @interface UpdateProfileDto
 */
export interface UpdateProfileDto {
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  imageId: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  password: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  slug: string;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  coverId: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateProfileDto
   */
  description: string | null;
}

/**
 * Check if a given object implements the UpdateProfileDto interface.
 */
export function instanceOfUpdateProfileDto(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "name" in value;
  isInstance = isInstance && "imageId" in value;
  isInstance = isInstance && "password" in value;
  isInstance = isInstance && "slug" in value;
  isInstance = isInstance && "coverId" in value;
  isInstance = isInstance && "description" in value;

  return isInstance;
}

export function UpdateProfileDtoFromJSON(json: any): UpdateProfileDto {
  return UpdateProfileDtoFromJSONTyped(json, false);
}

export function UpdateProfileDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateProfileDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    imageId: json["imageId"],
    password: json["password"],
    slug: json["slug"],
    coverId: json["coverId"],
    description: json["description"],
  };
}

export function UpdateProfileDtoToJSON(value?: UpdateProfileDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    imageId: value.imageId,
    password: value.password,
    slug: value.slug,
    coverId: value.coverId,
    description: value.description,
  };
}
