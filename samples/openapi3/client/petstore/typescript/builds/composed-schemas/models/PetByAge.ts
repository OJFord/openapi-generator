/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PetByAge {
    'age': number;
    'nickname'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "age",
            "baseName": "age",
            "type": "number",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PetByAge.attributeTypeMap;
    }
    
    public constructor() {
    }
}

