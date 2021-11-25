import * as CSS from 'csstype';

export class UnderlineWeightStyleTransform implements StyleTransformStrategy {
    IDMLAttr: string = '@_UnderlineWeight';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const underlineWeightValue = jsonObj['ParagraphStyle'][propName];
        if (underlineWeightValue !== '-9999') {
            style = {
              textDecorationThickness: underlineWeightValue,
            };
        }
        return style;
    }

}