import * as CSS from 'csstype';

export class AppliedLanguageTransform implements StyleTransformStrategy {
    IDMLAttr: string = "@_AppliedLanguage";
    transform(jsonObj: object, propName: string): object {
        return {...jsonObj, propName};
    }
    transformV2(jsonObj: any, propName: any): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};

        // Extract substring from first slash in given string
        const value = jsonObj[propName].substring(jsonObj[propName].indexOf("/") + 1);
        style = {
            fontLanguageOverride: value,
        };
        return style;
    }
}