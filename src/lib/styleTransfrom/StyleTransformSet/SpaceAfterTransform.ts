import * as CSS from 'csstype';

export class SpaceAfterStyleTransform implements StyleTransformStrategy {

    IDMLAttr: string = '@_SpaceAfter';

    transform(jsonObj: object, propName: string): object {
        return {...jsonObj, propName};
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const value = jsonObj[propName];
        style = {
            marginBottom: value,
        };
        return style;
    }
}