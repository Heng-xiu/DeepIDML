import * as CSS from 'csstype';

export class SkewStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_Skew';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const skewValue = jsonObj['ParagraphStyle'][propName];
        style = {
            transform: `skewX(${skewValue})`
        };
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const skewValue = jsonObj[propName];
        style = {
            transform: `skewX(${skewValue})`
        };
        return style;
    }

}