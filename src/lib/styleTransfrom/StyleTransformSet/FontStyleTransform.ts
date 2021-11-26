import * as CSS from 'csstype';

export class FontStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_FontStyle';

    transform(jsonObj: any, propName: string): object {
        if (propName !== this.IDMLAttr) return {};
        const SkewValue = jsonObj['ParagraphStyle'][propName];
        let style: CSS.Properties & CSS.PropertiesHyphen = {
        'font-style': `${SkewValue}`,
        };
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        if (propName !== this.IDMLAttr) return {};
        const SkewValue = jsonObj[propName];
        let style: CSS.Properties & CSS.PropertiesHyphen = {
        'font-style': `${SkewValue}`,
        };
        return style;
    }
    
}