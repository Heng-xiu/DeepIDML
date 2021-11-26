import * as CSS from 'csstype';

export class UnderlineOffsetStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_UnderlineOffset';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const underlineOffsetValue = jsonObj['ParagraphStyle'][propName];
        if (underlineOffsetValue !== '-9999') {
            style = {
              textUnderlineOffset: underlineOffsetValue,
            };
        }
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const underlineOffsetValue = jsonObj[propName];
        if (underlineOffsetValue !== '-9999') {
            style = {
              textUnderlineOffset: underlineOffsetValue,
            };
        }
        return style;
    }

}