import * as CSS from 'csstype';

export class PointSizeStyleTransform implements StyleTransformStrategy {
    IDMLAttr: string = '@_PointSize';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const pointSizeValue = jsonObj['ParagraphStyle'][propName];
        style = {
          fontSize: pointSizeValue,
        };
        return style;
    }
    
}