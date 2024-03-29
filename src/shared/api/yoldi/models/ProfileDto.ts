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
import type { ImageDto } from "./ImageDto";
import {
  ImageDtoFromJSON,
  ImageDtoFromJSONTyped,
  ImageDtoToJSON,
} from "./ImageDto";

/**
 *
 * @export
 * @interface ProfileDto
 */
export interface ProfileDto {
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  slug: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  description: string | null;
  /**
   *
   * @type {ImageDto}
   * @memberof ProfileDto
   */
  image: ImageDto | null;
  /**
   *
   * @type {ImageDto}
   * @memberof ProfileDto
   */
  cover: ImageDto | null;
}

/**
 * Check if a given object implements the ProfileDto interface.
 */
export function instanceOfProfileDto(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "name" in value;
  isInstance = isInstance && "email" in value;
  isInstance = isInstance && "slug" in value;
  isInstance = isInstance && "description" in value;
  isInstance = isInstance && "image" in value;
  isInstance = isInstance && "cover" in value;

  return isInstance;
}

export function ProfileDtoFromJSON(json: any): ProfileDto {
  return ProfileDtoFromJSONTyped(json, false);
}

export function ProfileDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfileDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    email: json["email"],
    slug: json["slug"],
    description: json["description"],
    image: ImageDtoFromJSON(json["image"]),
    cover: ImageDtoFromJSON(json["cover"]),
  };
}

export function ProfileDtoToJSON(value?: ProfileDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    email: value.email,
    slug: value.slug,
    description: value.description,
    image: ImageDtoToJSON(value.image),
    cover: ImageDtoToJSON(value.cover),
  };
}
